import React, {useState, useRef} from "react";
import "./styles.css";

const Interface = () => {
    const [showPass, setShowPass] = useState(false);
    const [passComplete, setPassComplete] = useState(false);
    const [showMsg, setShowMsg] = useState(false);

    const passRef = useRef(null);

    const chain1Ref = useRef(null);
    const chain2Ref = useRef(null);
    const chain3Ref = useRef(null);
    const chain4Ref = useRef(null);

    const envRef = useRef(null);


    const checkPass = () => {
        if (passRef.current.value === "tonyluvshirshir") {
            setShowPass(false);
            setPassComplete(true);
            chain1Ref.current.classList.add('chain1anim');
            chain2Ref.current.classList.add('chain2anim');
            chain3Ref.current.classList.add('chain3anim');
            chain4Ref.current.classList.add('chain4anim');
            setTimeout(()=>{
                envRef.current.src="/img/openenv.gif";
                setTimeout(()=>{
                    envRef.current.classList.add('openanim');
                    setTimeout(()=>{
                        setShowMsg(true);
                    }, 2800)
                },2000)
            }, 3000)
        } 
    }

    return (
        <div className="s-interface">
            <img className="s-bg" src="/img/bgstar.gif"/>
            {
                showMsg && <div className="s-msg-container"><div className="s-msg">
                    <p className="s-msg-title">TO SHIRLEY:
                    </p>
                    <p className="s-msg-p">
                        抱歉哦宝贝，<span className="s-msg-title">TONY</span>傻傻的，总会惹你生气，也总会自己生一些乱七八糟的气，我会慢慢变好的，因为<span className="s-msg-title">TONY</span>真的超喜欢<span className="s-msg-title">SHIRLEY</span>，我想天天跟<span className="s-msg-title">SHIRLEY</span>在一起，一起工作，一起吃饭，一起看剧，一起打游戏，一起出去玩，一起啪啪啪！（当然，啪啪啪是次要的，我喜欢的是你的人！）
                    </p>
                    <p className="s-msg-p">
                        我知道我答应你要早睡，但做完不知不觉已经凌晨4:30了。 ：D 这是我第一次写这样的东西，希望<span className="s-msg-title">ShirShir</span>会喜欢。
                    </p>
                    <p className="s-msg-p">
                        最后在这祝你520快乐BB！我会一直爱你的，像这个信一样 ：D 你会一直爱<span className="s-msg-title">TONY</span>吗（我知道我不该这么问，但是我就是想听你说：D）
                    </p>
                    <p className="s-msg-r">
                        LOVE YOU,
                    </p>
                    <p className="s-msg-r">
                        TONY
                    </p>
                </div>
                </div>
            }
            {
                !showMsg && <div className="s-init">
                    <img className="s-chain1" ref={chain1Ref} src="/img/chain.gif" />
                    <img className="s-chain2" ref={chain2Ref} src="/img/chain.gif" />
                    <img className="s-chain3" ref={chain3Ref} src="/img/chain.gif" />
                    <img className="s-chain4" ref={chain4Ref} src="/img/chain.gif" />
                    <img className="s-env" ref={envRef} src="/img/env.png" onClick={()=>{!passComplete && setShowPass(true)}}/>
                </div>
            }
            {showPass && <div className="s-pass">
                <span>Please Enter Password (Only if you are Shirley, if not Shirley please step away I don't talk to other girls :D)</span>
                <br></br>
                <br></br>
                <span>Password:</span>
                <input ref={passRef} />
                <br></br>
                <button className="s-pass-submit" onClick={checkPass}>SUBMIT</button>    
            </div>}
        </div>
    )
}

export default Interface;