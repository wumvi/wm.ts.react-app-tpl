import * as React from 'react'
import ProjectApp from '../src/ProjectApp'

interface IProps {

}

interface IState {

}

function defaultState (): IState {
    return {}
}

export class AppDev extends React.PureComponent<IProps, IState> {
    public state = defaultState()

    constructor (props: IProps) {
        super(props)

    }

    public componentDidMount () {

    }

    public componentWillUnmount () {

    }

    public render () {

        return <div>
            <ProjectApp/>
        </div>
    }
}