import moment from "moment";

export const getDate = () => {
    return moment().format('MMM Do, YYYY');
}