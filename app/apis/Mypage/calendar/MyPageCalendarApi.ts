import {BASE_API} from "@/apis/common/CommonApi";

export const MyPageCalendarApi = (year: number, month: number) =>
    BASE_API.get('/api/v1/order/calendar', {
        params: {
            year: year,
            month: month
        }
    }).then(res => res.data)
        .catch(error => {
                console.log(error.response.data)
                throw error;
            }
        );
