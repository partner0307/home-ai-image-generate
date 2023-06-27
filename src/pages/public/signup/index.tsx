import { Flex, Link, P, Span } from 'components/basic';
import { Button, Checkbox, Input } from 'components/custom';
import { GV } from 'utils/style.util';
import { ContactForm, InlineText, SignupContainer } from './style';
import { useState } from 'react';

const Signup = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    
    return <SignupContainer>
        <Flex $style={{
            fDirection: 'column',
            hAlign: 'center',
            vAlign: 'center',
            h: '100%'
        }}>
            <ContactForm>
                <Flex $style={{
                    fDirection: "column",
                    gap: "0.5rem"
                }}>
                    <Flex $style={{
                        fDirection: "column",
                        gap: "0.5rem"
                    }}>
                        <Span>Full Name:</Span>
                        <Input value={name} onChange={(e: any) => setName(e.target.value)} />
                    </Flex>
                    <Flex $style={{
                        fDirection: "column",
                        gap: "0.5rem"
                    }}>
                        <Span>Email:</Span>
                        <Input value={email} onChange={(e: any) => setEmail(e.target.value)} />
                    </Flex>
                    <Flex $style={{
                        fDirection: "column",
                        gap: "0.5rem"
                    }}>
                        <Span>Password:</Span>
                        <Input value={password} onChange={(e: any) => setPassword(e.target.value)} />
                    </Flex>
                    <Flex $style={{
                        fDirection: "column",
                        gap: "0.5rem"
                    }}>
                        <Span>Confirm:</Span>
                        <Input value={confirm} onChange={(e: any) => setConfirm(e.target.value)} />
                    </Flex>
                </Flex>
                <Checkbox
                    isChecked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    label={(<InlineText>I agree with the <Link $style={{
                        color: GV('primary')
                    }} to='/conditions'>Terms</Link> and <Link $style={{
                        color: GV('primary')
                    }} to='/conditions'>Conditions</Link></InlineText>)}
                    $style={{
                        w: "16px",
                        h: "16px",
                        initBg: "transparent",
                        initBorder: GV("primary"),
                        radius: "4px"
                    }}
                />
                <Button $style={{
                    bg: GV("primary")
                }}>Sign Up</Button>
                <Flex $style={{
                    hAlign: 'center'
                }}>
                    <Span $style={{
                        size: '0.8rem',
                    }}>Have an account? <Link $style={{
                        color: GV('primary')
                    }} to={'/'}>Sign in</Link>
                    </Span>
                </Flex>
            </ContactForm>
        </Flex>
    </SignupContainer>
}

export default Signup;