import React, { useState } from "react";

export function Calculator() {

    const [display, setDisplay] = useState<number | string>("");

    const validExpression = /^(\d+)([+\-*/])(\d+)$/;
    const buttons: string[] = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', 'C', '=', '+'
    ];

    const numbers: string[] = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9"
    ]

    const operators: string[] = [
        "+", "-", "*", "/"
    ]
    const [input, setInput] = useState<string>('');

    const hundleSubmit = () => {
        setDisplay(0);
        const newArray: string[] = input
            .split(/([+\-*/])/)
            .filter(item => item !== "");

        // エラーチェックスタート

        if (newArray.length === 0) {
            alert('式を入力して下さい');
        }
        if ((operators.includes(newArray[0])) || (operators.includes(newArray[newArray.length - 1]))) {
            alert("エラー: 計算式が演算子でスタート、または終了しています。");
        }
        for (let i = 0; i < newArray.length - 1; i++) {
            if (operators.includes(newArray[i]) && operators.includes(newArray[i + 1])) {
                alert('エラー：演算子が連続しています');
            }

            if (newArray[i] === "/" && newArray[i + 1] === "0") {
                alert('エラー：0で割ることはできません');
            }
        }
        // ここまでエラーチェック
        console.log("エラーチェック完了！計算を開始...");

        // ここから計算ロジック
        // ”*”や"/"を除いた新しい配列(resltArray)を作成
        const resultArray: string[] = [];
        for (let i = 0; i <= newArray.length - 1; i++) {

            if (newArray[i] === "/" || newArray[i] === "*") {

                const lastNum: number = parseFloat(resultArray.pop()!);
                const nextNum: number = parseFloat(newArray[i + 1]);

                const result: number = (newArray[i] === "*" ? lastNum * nextNum : lastNum / nextNum);

                resultArray.push(result.toString());
                i++;

            } else {
                resultArray.push(newArray[i]);
            }            
        }
        console.log("resultArray :",resultArray);

        //最終計算

        let ans: number = parseFloat(resultArray[0]);
        for (let i: number = 1; i < resultArray.length -1 ; i++) {
            if (resultArray[i] === "+") {
                ans += parseFloat(resultArray[i + 1]);
            } else if (resultArray[i] === "-") {
                ans -= parseFloat(resultArray[i + 1])
            }
        }

        setDisplay(ans);
        setInput('');
    }

    const hunldeNumberClick = (btn: string) => {
        setInput(prev => prev + btn);

        switch (btn) {
            case "C":
                setInput('');
                setDisplay("");
                break;
            case "=":
                hundleSubmit();
                break;
        }
    }

    return (
        <div className="calclator">
            <div className="container">
                <h1>電卓アプリ</h1>
                <div className="inputText">
                    <input type="text" value={input} />
                </div>
                <div className="button-grid">
                    {buttons.map(btn =>
                        <button key={btn} onClick={() => hunldeNumberClick(btn)}>{btn}</button>
                    )}
                </div>
                <p>計算結果：{display}</p>
            </div>
        </div>
    )
}
