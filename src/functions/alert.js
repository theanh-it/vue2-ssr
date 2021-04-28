function close(action) {
    action.classList.add("alert-hidden");
    setTimeout(() => action.remove(), 400);
}
export default ({ type, title, text, action, timeout }) => {
    var body = document.querySelector("body");

    var alertBox = document.createElement("div");
    alertBox.className = "alert-box";

    var alert2 = document.createElement("div");
    alert2.className = "alert";

    //header
    var header = document.createElement("div");
    header.className = "alert-header";

    var headerLeft = document.createElement("h3");
    headerLeft.className = "title";
    headerLeft.innerText = title;
    header.appendChild(headerLeft);

    var headerRight = document.createElement("div");
    headerRight.className = "close";
    headerRight.innerHTML = "<i class='fa fa-close'></i>";
    headerRight.onclick = () => close(alertBox);
    header.appendChild(headerRight);

    alert2.appendChild(header);
    //end header

    //main
    var main = document.createElement("div");
    main.className = "main";
    main.innerText = text;

    alert2.appendChild(main);
    //end main

    //bottom
    var bottom = document.createElement("div");
    bottom.className = "bottom";
    var bottomButton = document.createElement("button");
    bottomButton.className = "btn-success";
    bottomButton.innerText = "Có";
    bottomButton.onclick = () => {
        action();
        close(alertBox);
    }
    bottom.appendChild(bottomButton);

    var bottomButton2 = document.createElement("button");
    bottomButton2.className = "btn-danger";
    bottomButton2.innerText = "Không";
    bottomButton2.onclick = () => close(alertBox);
    bottom.appendChild(bottomButton2);

    alert2.appendChild(bottom);
    //end bottom

    alertBox.appendChild(alert2);

    body.appendChild(alertBox);
}