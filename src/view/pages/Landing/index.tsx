import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { FactoryImage } from '../../../assets/image/FactoryImage';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { About } from '../../components/About';
import { CatalogPart } from '../../components/CatalogPart';
import { Benefits } from '../../components/Benefits/index.tsx';

const cx = classNames.bind(styles);

export const Landing: React.FC = () => {
    const { data } = useGetProductsQuery();

    console.log(data);
    return (
        <div className={cx(styles.landing)}>
            <Header />
            <FactoryImage />
            <About />
            <CatalogPart />
            <Footer />
        </div>
    );
};
