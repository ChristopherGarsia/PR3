import Text from './Text'
import Images from './Images'
import Table from './Table'
import Email from './Email'
import Videos from './Videos'

function Body(props) {
    return (
        <div className='body'>
            <Text
                activeId={props.tabId}
                id={0}
            />
            <Images
                activeId={props.tabId}
                id={1}
            />
            <Videos
                activeId={props.tabId}
                id={2}
            />
            <Table
                activeId={props.tabId}
                id={3}
            />
            <Email
                activeId={props.tabId}
                id={4}
            />
        </div>
    )
}

export default Body