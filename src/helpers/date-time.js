import moment from "moment";


export const formatDateLL = (date) => {
    return moment(date).format("LL")
}


export const isAfter = (startTime, endTime) => { // "HH:mm"
    const st = moment(startTime, "HH:mm");
    const et = moment(endTime, "HH:mm");

    return et.isAfter(st);
}