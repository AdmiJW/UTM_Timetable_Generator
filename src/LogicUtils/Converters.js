

/* =================================================================================================================
    Convert from the dayOfWeek or the sessions to their respective row and column index in a 2D array.

    each function contains a reverseMap default parameter which if set to true, will map from index to the dayOfWeek
    or session.
================================================================================================================= */

const dayOfWeekArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const sessionArr = ['02','03','04','05','06','07','08','09','10','11','12'];


const dayOfWeekIndexConverter = (dayOfWeek, isIslamicWeekend, reverseMap=false) => {
    if (reverseMap) return dayOfWeekArr[dayOfWeek + (isIslamicWeekend? 0: 1) ];
    return dayOfWeekArr.indexOf( dayOfWeek ) - (isIslamicWeekend? 0: 1);
}

const sessionIndexConverter = (session, reverseMap=false) => {
    if (reverseMap) return sessionArr[session];
    return sessionArr.indexOf( session );
}

const sliceDayOfWeekArray = (isIslamicWeekend) => {
    return isIslamicWeekend? dayOfWeekArr.slice(0, 5): dayOfWeekArr.slice(1);
}



export { dayOfWeekIndexConverter, sessionIndexConverter, sliceDayOfWeekArray };

