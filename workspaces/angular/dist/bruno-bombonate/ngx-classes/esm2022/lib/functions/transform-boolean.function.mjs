export const transformBoolean = (value) => {
    const valueTypeOfIsBoolean = typeof value === 'boolean';
    const valueTypeOfIsString = typeof value === 'string';
    if (valueTypeOfIsBoolean) {
        return value;
    }
    else if (valueTypeOfIsString) {
        if (value === 'true') {
            return true;
        }
        else if (value === 'false') {
            return false;
        }
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLWJvb2xlYW4uZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icnVuby1ib21ib25hdGUvbmd4LWNsYXNzZXMvc3JjL2xpYi9mdW5jdGlvbnMvdHJhbnNmb3JtLWJvb2xlYW4uZnVuY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUFVLEVBQWtCLEVBQUU7SUFDN0QsTUFBTSxvQkFBb0IsR0FBRyxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUM7SUFDeEQsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUM7SUFDdEQsSUFBSSxvQkFBb0IsRUFBRTtRQUN4QixPQUFPLEtBQUssQ0FBQztLQUNkO1NBQU0sSUFBSSxtQkFBbUIsRUFBRTtRQUM5QixJQUFJLEtBQUssS0FBSyxNQUFNLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksS0FBSyxLQUFLLE9BQU8sRUFBRTtZQUM1QixPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtQm9vbGVhbiA9ICh2YWx1ZTogYW55KTogbnVsbCB8IGJvb2xlYW4gPT4ge1xyXG4gIGNvbnN0IHZhbHVlVHlwZU9mSXNCb29sZWFuID0gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XHJcbiAgY29uc3QgdmFsdWVUeXBlT2ZJc1N0cmluZyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XHJcbiAgaWYgKHZhbHVlVHlwZU9mSXNCb29sZWFuKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfSBlbHNlIGlmICh2YWx1ZVR5cGVPZklzU3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG4iXX0=