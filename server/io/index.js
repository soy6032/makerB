let clients = [];
//let records = [];

export default function Svc(socket, io) {
    return Object.freeze({
        // 방을 나갔을 시 이벤트
        leave(data) {
            socket.leave(data);
        },
        // 방 참여 이벤트
        async join(data) {
            socket.join(data.code);
            let userList = socket.adapter.rooms.get(data.code);
            let firstUser = '';
            let i = 0;
            userList.forEach( function(user) {
                if(i == 0) {
                    firstUser = user;   
                }
                i++;
            });
            let msg = `${data.code} 프로젝트에 ${data.email}님이 들어왔습니다.`;
            let joinData = new Object();
            joinData.code = data.code;
            joinData.msg = msg;
            joinData.firstUser = firstUser;
            joinData.fu_email = data.email;
            joinData.total = i;
            joinData.sendUser = socket.id;
            io.of('/index').to(data.code).emit('joinUser', joinData);
            
            // 자동 저장 5분
            let initTime = new Date(5 * 60 * 1000).getTime();
            let timer = setInterval( function() {
                initTime = initTime - 1000;
                userList = socket.adapter.rooms.get(joinData.code);
                let i = 0;
                userList.forEach( function(user) {
                    if(i == 0) {
                        firstUser = user;   
                    }
                });
                if(initTime === 0) {
                    initTime = new Date(5 * 60 * 1000).getTime();
                    io.of('/index').to(firstUser).emit('reqAutoSave');
                }
            }, 1000);
            if(joinData.total != 1) {
                socket.to(joinData.firstUser).emit('reqHtml', joinData);
            }
            // 프로젝트 참여 시 작업이력 요청
            socket.to(data.code).emit('requestPushRecord', data.email);
            // 연결이 끊겼을 경우 이벤트
            socket.once('disconnect', () => {
                if(Object.keys(userList).length === 0) {
                    clearInterval(timer);
                }
                socket.to(data.code).emit('logout', data.email);
                socket.leave(data.code);
            });
        },
        // 입력 데이터 전달 이벤트
        push(data) {
            socket.to(data.code).emit('async', data);
        },
        // 현재까지 입력된 모든 데이터 전달 이벤트
        recordsMerge(data) {
            for(let i in clients) {
                if(clients[i].email === data.to) {
                    socket.to(clients[i].id).emit('resRecords', data.record);
                    break;
                }
            }
        },
        // 프로젝트 중간 참여자가 방장에게 프로젝트 HTML 요청 이벤트
        resHtml(data) {
            socket.to(data.to).emit('reciveHtml', data.htmls);
        },
        // 저장 버튼 클릭시 모든 맴버에게 저장중 전달 이벤트
        saveBtn(data) {
            io.of('/index').to(data.code).emit('alert', data);
        }
    });
}