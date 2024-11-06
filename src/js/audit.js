function change(block) {
    let auditText = `Smart contract audits encompass the process of independently verifying and analyzing the code to assess potential code bugs, vulnerabilities, and their ramifications.<br><br>In more straightforward language, auditors conduct a thorough assessment of the code to identify and address any possible bugs or vulnerabilities.<br><br>This check helps to ensure that the code is working correctly and securely. It helps reduce risk and protect users investments.`;
    let legalText = `The levels of complexity in certain documents may vary depending on the project's unique characteristics and mechanisms.<br><br>We have a flexible approach as a team, and we will determine the most suitable choice for your requirements.`;

    let contentField = document.querySelector("#audit__block-content");

    let auditButton = document.querySelector("#audit__selection-audit");
    let legalButton = document.querySelector("#audit__selection-legal");

    if (block.id === "audit__selection-audit") {
        contentField.innerHTML = auditText;

        legalButton.style.backgroundColor = "#354924";
        legalButton.style.color = "#EFF7EA";
        auditButton.style.backgroundColor = "#EFF7EA";
        auditButton.style.color = "#354924";

        contentField.classList.remove("audit__block-content__small");
        contentField.classList.add("audit__block-content__large");

    } else if (block.id === "audit__selection-legal") {
        contentField.innerHTML = legalText;

        auditButton.style.backgroundColor = "#354924";
        auditButton.style.color = "#EFF7EA";
        legalButton.style.backgroundColor = "#EFF7EA";
        legalButton.style.color = "#354924";

        contentField.classList.remove("audit__block-content__large");
        contentField.classList.add("audit__block-content__small");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    change(document.querySelector("#audit__selection-audit"));
});