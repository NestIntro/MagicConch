import * as readline from "readline";
import chalkRainbow from "chalk-rainbow";

const answerlist = {
  answers: {
    0: "어",
    1: "아니",
    2: "싫어",
    3: "그래",
    4: "좋아",
    5: "돼",
    6: "안돼",
    7: "생각하고 말한 거야?",
    8: "충분해",
    9: "당장 해",
    10: "언젠가는",
    11: "되겠냐 그게",
    12: "오 그런 것도 질문이구나",
    13: "당연하지",
    14: "안알랴줌ㅋ",
    15: "흠",
    16: "오 나도 궁금했던건데",
    17: "내일까지 알아와",
    18: "이젠 좀 알 때도 되지 않았나?",
    19: "맞아",
    20: "졸리니까 내일 알려줄게",
    21: "내가 어제 알려줬잖아",
    22: "어이쿠 저런!",
    23: "안타깝네..",
    24: "오 대박",
    25: "사람은 좋은데,, 질문이 참,,",
    26: "너가 나보다 낫다",
    27: "한국말로 해",
    28: "크.. 그거지",
    29: "뭘 좀 아네",
    30: "너 T지?",
    31: "역시~!",
    32: "귀욥네",
    33: "ㅋ",
  },
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export default function give_me_answer() {
  rl.setPrompt("> ");
  rl.prompt();
  rl.on("line", function (line) {
    switch (line) {
      case "quit":
        rl.close();

      default:
        console.log(
          "🐚 :",
          chalkRainbow(answerlist.answers[Math.floor(Math.random() * 32 + 1)])
        );
        rl.prompt();
    }
  });
  rl.on("close", function () {
    process.exit();
  });
}

// give_me_answer();
