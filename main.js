function play(userChoice) {
    // 利用可能は選択肢を配列として定義
    const choice = [`rock`, `scissors`, `paper`];

    // コンピュータの選択をランダムに決定
    const computerChoice = choice[Math.floor(Math.random() * 3)];

    let result = ``;

    // ユーザーとコンピュータの選択を比較して結果を判定
    if (userChoice === computerChoice) {
        result = `引き分け！`;
    } else if (
        (userChoice === `rock` && computerChoice === `scissors`) ||
        (userChoice === `scissors` && computerChoice === `paper`) ||
        (userChoice === `paper` && computerChoice === `rock`)
    ){
        result = `あなたの勝ち！`;
    } else {
        result = `あなたの負け…`;
    }

    //

    // 英語の選択を日本語に変換するためのマッピングオブジェクト
    const choiceMapping = {
        'rock' : 'グー',
        'scissors' : 'チョキ',
        'paper' : 'パー'
    };

    // 選択に対応する画像のURLを保持するオブジェクト
    const choiceImage = {
        'rock' : `./img/rock.png`,
        'scissors' : `./img/scissors.png`,
        'paper' : `./img/paper.png`
    };

    // コンピュータの選択を日本語に変換
    const computerChoicejapanese = choiceMapping[computerChoice];

    // 結果テキストの作成
    const resultText = `コンピューターの選択： ${computerChoicejapanese}！　結果: ${result}`;

    // ユーザーの選択を画像で表示
    const yourChoiceImg = document.getElementById(`yourChoiceImg`);
    // yourChoiceImgというID属性を持ったタグを使用できるように代入する
    yourChoiceImg.src = choiceImage[userChoice];

    // コンピュータの選択を画像で表示
    const computerChoiceImg = document.getElementById(`computerChoiceImg`);
    computerChoiceImg.src = choiceImage[computerChoice];

    // 結果を履歴として追加
    const historyElement = document.createElement('p');
    historyElement.innerText = resultText;

    // 履歴をDOMに追加
    const addHistory = document.getElementById('history');
    addHistory.appendChild(historyElement);
    
    // 結果をコンソール画面にも出力
    console.log(historyElement);
}