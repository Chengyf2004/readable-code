const repository = "https://github.com/Chengyf2004/readable-code";
const skillNames = {
  generate: "readable-code-generate",
  review: "readable-code-review",
};
const status = document.querySelector(".copy-status");
const fallback = document.querySelector(".manual-copy");
const commandField = document.querySelector("#install-command");

for (const button of document.querySelectorAll("[data-copy]")) {
  button.addEventListener("click", async () => {
    const skill = skillNames[button.dataset.copy];
    const command = `$skill-installer 请安装 ${repository}/tree/main/skills/${skill}`;
    try {
      await navigator.clipboard.writeText(command);
      status.textContent = `已复制 ${skill} 的安装指令，粘贴到 Codex 即可。`;
      fallback.hidden = true;
    } catch {
      commandField.value = command;
      fallback.hidden = false;
      commandField.focus();
      commandField.select();
      status.textContent = "浏览器未允许自动复制，请复制下方安装指令。";
    }
  });
}

const sections = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 },
  );
  sections.forEach((section) => observer.observe(section));
} else {
  sections.forEach((section) => section.classList.add("visible"));
}
