document.addEventListener("DOMContentLoaded", function () {
    const jsonData = [
        "Held hands romantically?",
        "Been on a date?",
        "Been in a relationship?",
        "Danced without leaving room for Jesus?",
        "Kissed a non-family member?",
        "Kissed a non-family member on the lips?",
        "French kissed?",
        "French kissed in public?",
        "Kissed on the neck?",
        "Kissed horizontally?",
        "Given or received a hickey?",
        "Kissed or been kissed on the breast?",
        "Kissed someone below the belt?",
        "Kissed for more than two hours consecutively?",
        "Played a game involving stripping?",
        "Seen or been seen by another person in a sensual context?",
        "Masturbated?",
        "Masturbated to a picture or video?",
        "Masturbated while someone else was in the room?",
        "Been caught masturbating?",
        "Masturbated with an inanimate object",
        "Seen or read pornographic material?",
        "Massaged or been massaged sensually?",
        "Gone through the motions of intercourse while fully dressed?",
        "Undressed or been undressed by a MPS (member of the preferred sex)?",
        "Showered with a MPS?",
        "Fondled or had your butt cheeks fondled?",
        "Fondled or had your breasts fondled?",
        "Fondled or had your genitals fondled?",
        "Had or given “blue balls”?",
        "Had an orgasm due to someone else’s manipulation?",
        "Sent a sexually explicit text or instant message?",
        "Sent or received sexually explicit photographs?",
        "Engaged in sexually explicit activity over video chat?",
        "Cheated on a significant other during a relationship?",
        "Purchased contraceptives?",
        "Gave oral sex?",
        "Received oral sex?",
        "Ingested someone else’s genital secretion?",
        "Used a sex toy with a partner?",
        "Spent the night with a MPS?",
        "Been walked in on while engaging in a sexual act?",
        "Kicked a roommate out to commit a sexual act?",
        "Ingested alcohol in a non-religious context?",
        "Played a drinking game?",
        "Been drunk?",
        "Faked sobriety to parents or teachers?",
        "Had severe memory loss due to alcohol?",
        "Used tobacco?",
        "Used marijuana?",
        "Used a drug stronger than marijuana?",
        "Used methamphetamine, crack cocaine, PCP, horse tranquilizers or heroin?",
        "Been sent to the office of a principal, dean or judicial affairs representative for a disciplinary infraction?",
        "Been put on disciplinary probation or suspended?",
        "Urinated in public?",
        "Gone skinny-dipping?",
        "Gone streaking?",
        "Seen a stripper?",
        "Had the police called on you?",
        "Run from the police?",
        "Had the police question you?",
        "Had the police handcuff you?",
        "Been arrested?",
        "Been convicted of a crime?",
        "Been convicted of a felony?",
        "Committed an act of vandalism?",
        "Snuck out of your parents’ house?",
        "Had a secret(ish) relationship?",
        "?",
        "Been bitten?",
        "Been bitten by MPS?",
        "Kissed in a tractor?",
        "Had sexual intercourse in a motor vehicle?",
        "Had sexual intercourse?",
        "Kissed MPS during a sleepover?",
        "Kissed MPS during sleepover while someone else was in the room?",
        "Stargazed with MPS?",
        "Kissed in the rain?",
        "Kissed at midnight?",
        "Joined the mile high club?",
        "Participated in a “booty call” with a partner whom you were not in a relationship with?",
        "Traveled 100 or more miles for the primary purpose of sexual intercourse?",
        "Sucked MPS toes?",
        "Had a valentine?",
        "Had sexual intercourse without a condom?",
        "Crashed a car?",
        "Had a STI?",
        "Had a threesome?",
        "Attended an orgy?",
        "Had two or more distinct acts of sexual intercourse with two or more people within 24 hours?",
        "Had a crush for more than a year?",
        "Been photographed or filmed during sexual intercourse by yourself or others?",
        "Had period sex?",
        "Had anal sex?",
        "Had a pregnancy scare?",
        "Impregnated someone or been impregnated?",
        "Paid or been paid for a sexual act?",
        "Committed an act of voyeurism?",
        "Committed an act of incest?",
        "Engaged in bestiality?"
    ]; // Example JSON data
    const container = document.getElementById("checkboxList");

    jsonData.forEach((item, index) => {
        const listItem = document.createElement("li"); // Create a list item

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `item-${index}`;
        checkbox.name = `item-${index}`;

        const label = document.createElement("label");
        label.htmlFor = `item-${index}`;
        label.textContent = item;

        listItem.appendChild(checkbox); // Add checkbox to list item
        listItem.appendChild(label); // Add label to list item
        container.appendChild(listItem); // Add list item to ordered list
    });

    document.getElementById("calculateBtn").addEventListener("click", function () {
        const checkboxes = container.querySelectorAll("input[type='checkbox']");
        const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
        const result = jsonData.length - checkedCount;

        document.getElementById("result").textContent = `SCORE: ${result}`;
    });
});
