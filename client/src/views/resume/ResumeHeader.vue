<template>
    <header>
        <h1>Matthew Keil</h1>
        <h2>Full-Stack Web Developer</h2>
        <div>
            <span>Ft. Lauderdale, FL</span>
            <span>954-734-4691</span>
        </div>
        <div>
            <a href="https://github.com/matthewkeil">
                <img src="assets/github.svg" alt="github" height="20px" />
            </a>
            <a href="https://www.linkedin.com/in/matthew-keil">
                <img
                    style="margin-right: -5px;"
                    src="assets/linkedin.png"
                    alt="LinkedIn"
                    height="20px"
                />
            </a>
            <a href="mailto:me@matthewkeil.com">
                <img src="assets/email.png" alt="email" height="20px" />
            </a>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    width: 100%;
    padding-bottom: 0.5rem;
    text-align: center;
    color: rgb(15, 36, 62);
}

header > h1 {
    font-weight: bold;
    font-size: 3rem;
    line-height: 0.8;
}

header > h2 {
    /* font-size: 1.9rem; */
    line-height: 1;
    padding-bottom: 0.2rem !important;
}

header > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 0.3rem;
}

header > div > * {
    padding-left: 2rem;
}

header > div > *:first-child {
    padding-left: 0;
    /* text-decoration: none; */
}
</style>

<script lang="ts">
export default {
    name: "ResumeHeader"
};
</script>
