

/* =================================================================================================================
    Convert from the dayOfWeek or the sessions to their respective row and column index in a 2D array.

    each function contains a reverseMap default parameter which if set to true, will map from index to the dayOfWeek
    or session.
================================================================================================================= */

const dayOfWeekArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
const sessionArr = ['02','03','04','05','06','07','08','09','10','11','12'];

const Converters = {
    dayOfWeekIndexConverter: (dayOfWeek, reverseMap=false) => {
        if (reverseMap) return dayOfWeekArr[dayOfWeek];
        return dayOfWeekArr.indexOf( dayOfWeek );
    },
    
    sessionIndexConverter: (session, reverseMap=false) => {
        if (reverseMap) return sessionArr[session];
        return sessionArr.indexOf( session );
    }
};

export default Converters;

