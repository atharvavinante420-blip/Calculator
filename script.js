let ans = document.querySelector("#display_ans");
let num = document.querySelectorAll(".button");
let l = 0;

num.forEach((ele) => {
    ele.onclick = () => {

        if(ele.innerText == "=")
        {
            if(ans.innerText == "Enter the number")
            {
                ans.innerText = "Error";
                l = 0 ;
            }
            else{
                ans.innerText = eval(ans.innerText);
                l = ans.innerText.length;
            }
        }
        else if (ele.innerText == "c")
        {
            ans.innerText = "Enter the number";
            l = 0 ;
        }

        else if(l >= 15 ){
            return ;
        }

        else{
            if(ans.innerText == "Enter the number")
            {
                ans.innerText = ele.innerText;
                l++;
            }
            else{
                ans.innerText += ele.innerText;
                l++;
            }
        }
    }
})