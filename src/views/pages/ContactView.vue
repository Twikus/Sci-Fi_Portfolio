<template>
    <div class="container_contact">
        <div class="form_header">
            <h2>OPEN FOR HIRE</h2>
            <p>I WOULD LOVE TO HEAR ABOUT YOUR PROJECTS!</p>
        </div>
        <form action="">
            <div class="form_body">
                <div class="form_disabled">
                    <p>FORM DISABLED FOR THE MOMENT</p>
                </div>
                <div>
                    <label for="name">HOW SHOULD I CALL YOU?</label>
                    <input type="text" name="name" id="form_name" class="input" placeholder="YOUR NAME">
                </div>
                <div>
                    <label for="email">SENDING FROM</label>
                    <input type="email" name="email" id="form_email" class="input" placeholder="YOUR.NAME@CONTACT.COM">
                </div>
                <div>
                    <label for="content">TRANSMITTED DATA</label>
                    <textarea name="content" id="form_content" class="input" cols="30" rows="10" placeholder="HI, I WRITE TO YOU ABOUT..."></textarea>
                </div>
            </div>
            <button type="submit" class="submit-btn" disabled >SEND MESSAGE</button>
        </form>
    </div>
</template>

<style lang="scss">
.container_contact {
    height: 100%;
    width: 470px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .form_header {
        margin-bottom: 20px;

        h2 {
            font-family: 'Big Shoulders Display', sans-serif;
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 2px;
        }

        p {
            color: var(--grey-middle);
            font-size: 16px;
            letter-spacing: 1px;
        }
    }

    .form_body {
        height: 400px;
        background-color: var(--red-primary-opacity);
        border: 1px solid var(--grey-lower);
        margin-bottom: 10px;
        position: relative;

        .form_disabled {
            position: absolute;
            top: -20px;
            left: -20px;
            height: 100%;
            width: 100%;
            background-color: var(--black-middle);
            display: flex;
            justify-content: center;
            align-items: center;

            p {
               width: 100%;
               padding: 20px 0;
               text-align: center;
               background-color: var(--grey-lower);
            }
        }

        div {
            display: flex;
            flex-direction: column;
            margin: 20px;

            label {
                color: var(--red-primary);
                font-family: 'Big Shoulders Display', sans-serif;
                font-size: 18px;
                font-weight: 600;
                letter-spacing: 1px;
                margin-bottom: 5px;
            }

            .input {
                background-color: var(--black);
                border: 1px solid var(--grey-lower);
                color: var(--grey-primary);
                font-size: 14px;
                font-family: 'Iceland', sans-serif;
                margin-bottom: 10px;
                padding: 10px;
            }

            textarea {
                height: 120px;
                resize: none;
            }
        }
    }

    .submit-btn {
        background-color: var(--red-primary);
        color: var(--black);
        font-family: 'Big Shoulders Display', sans-serif;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 1px;
        padding: 10px;
        border: 1px solid var(--grey-lower);
        cursor: pointer;

        // attribut disabled
        &:disabled {
            background-color: var(--grey-lower);
            color: var(--grey-primary);
            cursor: not-allowed;
        }
    }
    
}
</style>