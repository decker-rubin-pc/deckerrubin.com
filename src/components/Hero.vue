<template>
    <section class="hero">
        <div itemprop="alternativeHeadline">
            <h1>Proudly serving <b>Unions</b></h1>
            <p>and their members in both the public and private sectors.</p>
        </div>
    </section>
</template>

<style scoped>
    .hero {
        position: relative;
        background-image: url('../img/decker-rubin-feature-banner.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        width: 100%;
        height: 108rem;
    }

    .hero div {
        position: absolute;
        right: 0;
        bottom: 21rem;
        background: rgba(var(--theme-darker-blue), 0.5);
        color: var(--theme-white);
        border-left: 1rem solid rgb(var(--theme-pink));
        padding: 5rem;
    }

    .hero h1 {
        font-size: 4.4rem;
        font-weight: normal;
        margin: 0;
    }

    .hero p {
        font-size: 2.2rem;
        display: inline-block;
        max-width: 59%;
        text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    }

    .hero b {
        display: inline-block;
        font-weight: 100;
    }
</style>
