import "./style.css";

const input = document.querySelector<HTMLInputElement>("#number-input")!;
const random = document.querySelector<HTMLButtonElement>("#random");

let n: number = 0;

const topRightEl = [
  null,
  document.getElementById("score-1")!,
  document.getElementById("score-2")!,
  document.getElementById("score-3")!,
  document.getElementById("score-4")!,
  null,
  document.getElementById("score-6")!,
  document.getElementById("score-7")!,
] as const;

const topLeftEl = [
  null,
  document.getElementById("score-10")!,
  document.getElementById("score-20")!,
  document.getElementById("score-30")!,
  document.getElementById("score-40")!,
  null,
  document.getElementById("score-60")!,
];

const btmRightEl = [
  null,
  document.getElementById("score-100")!,
  document.getElementById("score-200")!,
  document.getElementById("score-300")!,
  document.getElementById("score-400")!,
  null,
  document.getElementById("score-600")!,
];

const btmLeftEl = [
  null,
  document.getElementById("score-1000")!,
  document.getElementById("score-2000")!,
  document.getElementById("score-3000")!,
  document.getElementById("score-4000")!,
  null,
  document.getElementById("score-6000")!,
];

function updateStyle(n: number, style: string) {
  if (n === 0 || !Number.isFinite(n)) return;

  if (n > 999) {
    const i = Math.floor(n / 1000);
    switch (i) {
      case 5: {
        btmLeftEl[1]!.style.display = style;
        btmLeftEl[4]!.style.display = style;
        break;
      }
      case 7: {
        btmLeftEl[1]!.style.display = style;
        btmLeftEl[6]!.style.display = style;
        break;
      }
      case 8: {
        btmLeftEl[2]!.style.display = style;
        btmLeftEl[6]!.style.display = style;
        break;
      }
      case 9: {
        btmLeftEl[1]!.style.display = style;
        btmLeftEl[2]!.style.display = style;
        btmLeftEl[6]!.style.display = style;
        break;
      }
      default: {
        btmLeftEl[i]!.style.display = style;
        break;
      }
    }
    n %= 1000;
  }

  if (n > 99) {
    const i = Math.floor(n / 100);
    switch (i) {
      case 5: {
        btmRightEl[1]!.style.display = style;
        btmRightEl[4]!.style.display = style;
        break;
      }
      case 7: {
        btmRightEl[1]!.style.display = style;
        btmRightEl[6]!.style.display = style;
        break;
      }
      case 8: {
        btmRightEl[2]!.style.display = style;
        btmRightEl[6]!.style.display = style;
        break;
      }
      case 9: {
        btmRightEl[1]!.style.display = style;
        btmRightEl[2]!.style.display = style;
        btmRightEl[6]!.style.display = style;
        break;
      }
      default: {
        btmRightEl[i]!.style.display = style;
        break;
      }
    }
    n %= 100;
  }

  if (n > 9) {
    const i = Math.floor(n / 10);
    switch (i) {
      case 5: {
        topLeftEl[1]!.style.display = style;
        topLeftEl[4]!.style.display = style;
        break;
      }
      case 7: {
        topLeftEl[1]!.style.display = style;
        topLeftEl[6]!.style.display = style;
        break;
      }
      case 8: {
        topLeftEl[2]!.style.display = style;
        topLeftEl[6]!.style.display = style;
        break;
      }
      case 9: {
        topLeftEl[1]!.style.display = style;
        topLeftEl[2]!.style.display = style;
        topLeftEl[6]!.style.display = style;
        break;
      }
      default: {
        topLeftEl[i]!.style.display = style;
        break;
      }
    }
    n %= 10;
  }

  switch (n) {
    case 0: {
      break;
    }
    case 5: {
      topRightEl[1].style.display = style;
      topRightEl[4].style.display = style;
      break;
    }
    case 7: {
      topRightEl[1].style.display = style;
      topRightEl[6].style.display = style;
      break;
    }
    case 8: {
      topRightEl[2].style.display = style;
      topRightEl[6].style.display = style;
      break;
    }
    case 9: {
      topRightEl[1].style.display = style;
      topRightEl[2].style.display = style;
      topRightEl[6].style.display = style;
      break;
    }
    default: {
      topRightEl[n]!.style.display = style;
    }
  }
}

input.addEventListener("input", () => {
  updateStyle(n, "none");
  const n2 = Math.min(input.valueAsNumber, 9999);
  updateStyle(n2, "inherit");
  n = n2;
});

random?.addEventListener("click", () => {
  updateStyle(n, "none");
  const n2 = Math.floor(Math.random() * 9998 + 1);
  input.value = n2.toString();
  updateStyle(n2, "inherit");
  n = n2;
});
