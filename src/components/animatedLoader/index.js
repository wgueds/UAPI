import React from 'react';
import {StyleSheet, View, Modal, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import LottieAnimation from 'lottie-react-native';
import metrics from "../../assets/styles/metrics";

export default class AnimatedLoader extends React.PureComponent {
    static defaultProps = {
        visible: false,
        overlayColor: 'rgba(0, 0, 0, 0.25)',
        animationType: 'none',
        source: require('./loader.json'),
        animationStyle: {},
        additionalContainerStyle: {},
        speed: 1,
        loop: true
    };

    static propTypes = {
        visible: PropTypes.bool,
        overlayColor: PropTypes.string,
        animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
        source: PropTypes.object,
        animationStyle: ViewPropTypes.style,
        speed: PropTypes.number,
        loop: PropTypes.bool,
    };

    animation = React.createRef();

    componentDidMount() {
        if (this.animation.current) {
            this.animation.current.play();
        }
    }

    componentDidUpdate(prevProps) {
        const {visible} = this.props;
        if (visible !== prevProps.visible) {
            if (this.animation.current) {
                this.animation.current.play();
            }
        }
    }

    _renderLottie = () => {
        const {source, animationStyle, speed, loop} = this.props;
        return (
            <LottieAnimation
                ref={this.animation}
                source={source}
                loop={loop}
                speed={speed}
                style={[styles.animationStyle, animationStyle]}
            />
        );
    };

    render() {
        const {visible, overlayColor, animationType, additionalContainerStyle} = this.props;

        return (
            <Modal
                transparent
                visible={visible}
                animationType={animationType}
                supportedOrientations={['portrait']}
                onRequestClose={() => {
                }}
            >
                <View style={[styles.container, {backgroundColor: overlayColor}, additionalContainerStyle]}>
                    <View>{this._renderLottie()}</View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: metrics.topMarginLoader,
        bottom: 0,
        left: 0,
        right: 0,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: metrics.radius,
        borderTopRightRadius: metrics.radius
    },
    animationStyle: {
        left: metrics.padding - 5,
        height: '100%',
        width: '100%',
    },
});
