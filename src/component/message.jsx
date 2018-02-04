import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { color, fontFamily, shadow } from '../variables';


const Container = styled.div`
    font-family: ${fontFamily};
    font-smoothing: antialiased;
    box-shadow: ${shadow};
    display: flex;
    box-pack: justify;
    flex-pack: justify;
    justify-content: space-between;
    width: 16.875rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: ${color.background};
    color: #152935;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-right: 1rem;

    ${props => props.type === 'success' && ` border-left: 6px solid ${color.success};`}
    ${props => props.type === 'info' && ` border-left: 6px solid ${color.info};`}
    ${props => props.type === 'warning' && ` border-left: 6px solid ${color.warning};`}
    ${props => props.type === 'error' && ` border-left: 6px solid ${color.error};`}

`;

const Button = styled.div`
    border: none;
    cursor: pointer;
    margin: 0;
    width: 12px;
    height: 12px;
    position: relative;

    &:focus{
        outline: 1px solid #3d70b2;
    }
`;

const Icon = styled.div`
    height: 10px;
    width: 10px;
    fill: #5a6872;
    position: absolute;
    top: -4px;
    right: 1px;
`;

const Title = styled.h3`
    font-size: 0.875rem;
    font-weight: 600;
    margin: 0;
    letter-spacing: 0;
    line-height: 1;
    padding-bottom: 0.125rem;
`;

const SubTitle = styled.div`
    font-size: 0.75rem;
    color: #5a6872;
    margin-top: 0;
    margin-bottom: 0.5rem;
    line-height: 1.2;
`;

const Text = styled.div`
    font-size: 0.75rem;
    color: #5a6872;
    line-height: 1;
`;

export const TYPES = {
    error: 'error',
    success: 'success',
    info: 'info',
    warning: 'warning'
}

export default class Message extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.oneOf(Object.keys(TYPES)).isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        text: PropTypes.string,
        onClose: PropTypes.func,
    };

    static defaultProps = {
        type: TYPES.success,
        title: 'Provide a title',
        subtitle: 'Provide a subtitle',
        text: 'Provide a text',
        onClose: () => { },
    };

    state = {
        isOpen: true,
    };

    handleClose = e => {
        this.setState({ isOpen: false });
        this.props.onClose(e);
    };

    render() {
        if (!this.state.isOpen) {
            return null;
        } else {

            const { type, title, subtitle, text } = this.props;

            return (
                <Container {...this.props}>
                    <div>
                        <Title>{title}</Title>
                        <SubTitle>{subtitle}</SubTitle>
                        <Text>{text}</Text>
                    </div>
                    <Button
                        tabIndex={0}
                        onClick={this.handleClose}>
                        <Icon>
                            <svg width="10" height="10" viewBox="0 0 10 10" fillRule="evenodd">
                                <path d="M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z"></path>
                            </svg>
                        </Icon>
                    </Button>
                </Container>
            );
        }
    }
}

Message.types = TYPES;