import * as React from 'react';
import {StatefulMenu, OptionProfile} from 'baseui/menu';
import gold from '../../assets/dogo_ouro.png';
import dima from '../../assets/dogo_diam.png';
import plat from '../../assets/dogo_plat.png';
import all from '../../assets/dogo_all.png';

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
        title: 'Tier Platina',
        subtitle: 'Platina',
        body: 'Clique para ir a página!',
        imgUrl: plat,
        href: '/bronze',
    },
    {
        
        title: 'Tier Diamante',
        subtitle: 'Diamante',
        body: 'Clique para ir a página!',
        imgUrl: dima,
        href: '/diamante',
    },
    {
        title: 'Geral',
        subtitle: 'Geral',
        body: 'Clique para ir a página!',
        imgUrl: all,
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