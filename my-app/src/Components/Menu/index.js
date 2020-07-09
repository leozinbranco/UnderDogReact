import * as React from 'react';
import {StatefulMenu, OptionProfile} from 'baseui/menu';
import gold from '../../assets/gold.png';

    /*const ITEMS = Array.from({length: 4}, () => ({
        
        title: 'Tier Gold',
        subtitle: 'Gold',
        body: 'Clique para ir a página!',
        imgUrl: gold,
    },                   <Link to={`/users/${user.id}`} activeClassName="active">{user.name}</Link>
    ));*/

    const ITEMS = [{
        
        title: 'Tier Gold',
        subtitle: 'Gold',
        body: 'Clique para ir a página!',
        imgUrl: gold,
        href: '/gold',
    },
    {
        title: 'Tier Diamante',
        subtitle: 'Diamante',
        body: 'Clique para ir a página!',
        imgUrl: gold,
        href: '/diamante',
    },
    {
        title: 'Tier Bronze',
        subtitle: 'Bronze',
        body: 'Clique para ir a página!',
        imgUrl: gold,
        href: '/bronze',
    },
    {
        title: 'Tier Platina',
        subtitle: 'Bronze',
        body: 'Clique para ir a página!',
        imgUrl: gold,
        href: '/dark',
    }];

  

    export default () => (
        <StatefulMenu
            items={ITEMS}
            overrides={{
            List: {
                style: {
                width: '100%',
                backgroundColor: 'transparent',
                },
            },
            Option: {
                component: OptionProfile,
                props: {
                getProfileItemLabels: ({title, subtitle, body}) => ({
                    title,
                    subtitle,
                    body,
                }),
                getProfileItemImg: item => item.imgUrl,
                getProfileItemImgText: item => item.title,
            
                },
                
            },
            }}
            onItemSelect={(item) => {
                
                window.location.href = item.item.href
            }}
            
        />
    );