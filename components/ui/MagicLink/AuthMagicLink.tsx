import React, { Component } from 'react';
import { useRouter, NextRouter } from 'next/router';
import { verifyEmail, resetPassword } from '../../../redux/auth/service';
import { Dispatch, bindActionCreators } from 'redux';
import { selectAuthState } from '../../../redux/auth/selector';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ResetPassword from '../Auth/ResetPassword';
import VerifyEmail from '../Auth/VerifyEmail';

type Props = {
    router: NextRouter,
    auth: any,
    verifyEmail: typeof verifyEmail,
    resetPassword: typeof resetPassword
};

const mapStateToProps = (state: any) => {
    return {
        auth: selectAuthState(state),
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    verifyEmail: bindActionCreators(verifyEmail, dispatch),
    resetPassword: bindActionCreators(resetPassword, dispatch)
});

class AuthMagicLink extends Component<Props> {
    state = {
        type: '',
        token: '',
        password: 'test'
    };

    componentDidMount() {
        const router = this.props.router;
        console.log('magic link render.........', 
            router.query);

        const type = router.query.type as string;
        const token = router.query.token as string;
        
        if (type === 'verify') {
            this.props.verifyEmail(token);
        }
        else if (type === 'reset') {
            this.props.resetPassword(token, this.state.password);
        }

        this.setState({
            type, token
        });
    }

    render() {
        // const { type, token } = this.state;
        const { auth } = this.props;

        return (
            <Container component="main" maxWidth="md">
                {auth.get('isProcessing') ? 
                    (<Box mt={3}>
                        <Typography variant="body2" color="textSecondary" align="center">
                        Please wait a moment while processing...
                        </Typography>
                    </Box>)
                    : 
                    (<Box mt={3}>
                        <Typography variant="body2" color="textSecondary" align="center">
                        Successfully processed!
                        </Typography>
                    </Box>)
                }
            </Container>
        );
    }
}

const AuthMagicLinkWraper = (props: any) => {
    const router = useRouter();
    const type = router.query.type as string;
    const token = router.query.token as string;

    if (type === 'verify') {
        return <VerifyEmail {...props} type={type} token={token}/>
    }
    else if (type === 'reset') {
        return <ResetPassword {...props} type={type} token={token}/>
    }
    return <AuthMagicLink {...props} router = {router}/>
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthMagicLinkWraper);