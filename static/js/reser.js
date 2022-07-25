const resv_form = document.getElementById("resv_form");


resv_form.onsubmit = function(event) {
    event.preventDefault()
    const { visitorName, visitorPhoneNumber, resvDate, resvReason } = resv_form

    if (visitorName.value == "") {
        alert("이름을 입력해주세요")
        visitorName.focus()
        return;
    }

    if (visitorPhoneNumber.value == "") {
        alert("전화번호를 입력해주세요")
        visitorPhoneNumber.focus()
        return;
    }

    if (!/^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/.test(visitorPhoneNumber.value)) {
        alert("전화번호를 정확히 입력해주세요.")
        visitorPhoneNumber.focus()
        return;
    }

    if (resvDate.value == "") {
        alert("날짜를 입력해주세요")
        resvDate.focus()
        return;
    }

    if (resvReason.value == "") {
        alert("방문사유를 입력해주세요")
        resvReason.focus()
        return;
    }
    resv_form.submit()
}