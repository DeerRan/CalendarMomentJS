# CalendarMomentJS
A calendar that uses moment.js to organize standard working outs into past, present, or future and allows you to save events/plans.

# Deployable Link
    https://deerran.github.io/CalendarMomentJS/Develop/index.html

# HTML  
    HTML file was used to structure rows for easy CSS and JS editing. Each row contained there divs which contained time, text, and button respectively.
    Formatting it this way helped make bootstrap CSS easier and javascript button interactions more straightfoward.

# CSS
    Simply just styling. I attempted to make it accessible to mobile and it seems to look alright! Bootstrap makes accessability for other devices VERY easy.

# JS
    Code used to make the page interactable. Uses only buttons and moment.js to function. (Also local storage) 
    Each row was given an ID which was used to track its value for storing.
    MomentJS did not give me any troubles fortunately, however everytime I tried to use Jquery, the browser seemed to not recognize the documentation.

# Issues
    I'm sure I am missing an opportuinity to shove my values into an array and likewise with my 'past present or future' lines of code.
    I really wished I could have optimized it to where it only needed an array and for each variable in the array, I could just run it's value, shaving down lines
    of code. However, I couldn't figure out how to properly grab the value I needed with 'array.forEach' or like documentation. I could get it to run without any
    documentaion errors however it would never grab what I needed.

# Lesson/Takeaway
    Do more research on arrays. A lot of my code was copy and past (from my own written code) but just the different variables changed. If the code remains the same,
    I could definetly find a variable that represents all my other variables.