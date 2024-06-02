<script setup lang="ts">
import logs from '@/database/logs.json';
</script>

<template>
    <div class="logs-container">
        <h2>DATA LOG DUMP INITIALIZED.</h2>
        <div class="principal-log">
            <div class="container-head">
                <div>
                    <p class="title">LOG ENTRY: SPLIIIT SANDWICH COURSE INITIATED</p>
                    <p class="date">DATE: <span>01.09.2022 - 31.08.2024</span></p>
                </div>
                <p class="label">LOCATION: <span>ROSIÈRES-PRÉS-TROYES</span></p>
            </div>
            <div class="container-bloc">
                <div>
                    <h3>ROLE</h3>
                    <p>I WAS A FULL-STACK DEVELOPER ON A WORK-STUDY BASIS AT THE COMPANY SPLIIIT DURING MY 2 YEARS OF BUT MMI.</p>
                </div>
                <div>
                    <h3>WORKS</h3>
                    <p>CREATION OF A COMPLEX BACKOFFICE (FRONT AND BACK), REGISTRATION TUNNEL, DOWNLOADING OF PERSONAL DATA (GDPR)...</p>
                </div>
                <div>
                    <h3>ACQUIRED SKILLS</h3>
                    <p>I ACQUIRED THESE SOFT SKILLS: AUTONOMY, TIME MANAGEMENT, COMMUNICATION AND ANALYTICAL SKILLS.</p>
                </div>
                <div>
                    <h3>CONCLUSION</h3>
                    <p>THIS EXPERIENCE BROUGHT ME A LOT OF POSITIVE THINGS THAT WILL HELP ME THROUGHOUT MY CAREER</p>
                </div>
            </div>
        </div>

        <div class="older-logs">
            <p class="label">OLDER LOGS:</p>
            <div v-for="log in logs" class="log">
                <p class="title">LOG ENTRY: {{ log.title }}</p>
                <p class="date">DATE: {{ log.date }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .logs-container {
        height: 100%;
        width: 80%;
        margin: 0 auto;
        background: rgb(232,74,74);
        background: linear-gradient(90deg, rgba(232,74,74,0) 0%, rgba(232,74,74,0.17) 50%, rgba(232,74,74,0) 100%);
        padding-top: 30px;

        h2 {
            font-size: 18px;
            text-align: center;
            color: white;
        }

        .label {
            font-size: 16px;
            font-weight: 100;
            color: white;
            letter-spacing: 1px;
            padding-left: 5px;

            span {
                color: var(--grey-primary);
            }
        }

        .principal-log {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 20px auto 0;

            .container-head {
                width: 100%;
                display: flex;
                flex-direction: column;
                
                div {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: var(--red-primary);
                    padding: 0 10px;
                    color: black;

                    .title {
                        font-size: 18px;
                        font-family: 'Big Shoulders Display', sans-serif;
                        font-weight: bold;
                        letter-spacing: 1px;
                    }

                    .date {
                        font-size: 14px;
                        
                        span {
                            font-weight: bold;
                        }
                    }
                }
            }

            .container-bloc {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                margin-top: 20px;

                div {
                    width: 300px;
                    background-color: black;
                    border: 1px solid var(--grey-lighter);
                    padding: 5px 10px;
                    border-top-left-radius: 10px;

                    h3 {
                        font-size: 16px;
                        font-family: 'Big Shoulders Display', sans-serif;
                        font-weight: bold;
                        letter-spacing: 1px;
                        color: var(--red-primary);
                    }

                    p {
                        font-size: 14px;
                        color: var(--grey-primary);
                        font-weight: 100;
                    }
                }
            }
        }

        .older-logs {
            margin-top: 80px;

            .log {
                border: 1px solid var(--red-primary);
                margin: 5px 0;
                padding: 0 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: var(--red-primary);

                .title {
                    font-size: 16px;
                    font-family: 'Big Shoulders Display', sans-serif;
                    font-weight: 600;
                    letter-spacing: 2px;
                }

                .date {
                    font-size: 14px;
                    font-weight: 100;
                }
            }
        }
    }
</style>