import { ContentCard } from '@vkontakte/vkui';

export const Menu = (menuData) => {
    return menuData?.map(item =>
        <ContentCard
            header={item?.title}
            caption={item?.thumbnailUrl}
            image={item?.url}
        >
            {item}
        </ContentCard>
    )
}