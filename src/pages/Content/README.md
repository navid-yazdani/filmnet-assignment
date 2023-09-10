The display of video contents in the browser is implemented on this page.This file has various sections, which are explained below:

>Design and implement of this page using two components: videoCard and infiniteScroll.

>Get contents Data using handleContentData. In this function use dispatch(contentList) with some params that define on initialState. This params contains offset and count that send to get request as query parameters. After get data change params and send data to contentCard component.

>Get extra videos data after scrolling page and update state of contents list in store.

>Use useAppSelector for get data that save on store and send to contentCard component

>Send some properties to infiniteScroll. These properties contain a custom wrapper, hasMore, handleContentData function and loading. Custom wrapper can be a custom element pass for styling data inside this component. The hasMore properties show to us that there are extra data and should call handleContnetData. The loading properties use for loading extra cards.
