async function makeIssue() {
    const token = process.env.GH_TOKEN; 
    const OWNER = "shienka07"; 
    const REPO = "power_action_sample";
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title: "오늘 행운의 숫자",
            body: `$(Math.floor(Math.random() * 100) + 1)`,
        })
    });

    if(response.ok) {
        console.log("성공");
    } else {
        console.log("실패");
    }
}

makeIssue();