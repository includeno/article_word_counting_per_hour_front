
function getDateStringFromTimestamp(timestamp){
    let time=new Date(timestamp);
    return time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate()+
        " "+time.getHours()+
        ":"+time.getMinutes()+
        ":"+time.getSeconds();
}
export default {getDateStringFromTimestamp};