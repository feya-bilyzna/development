import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {
    NavbarMenu,
    MainPage,
    ContactsPage,
    FooterComponent,
    PageContainer,
    ProductCategoryPage,
    ProductSubcategoryPage,
    CartButton,
    DetailPage,
    ShoppingCart,
} from './components'

import {categoriesData} from './data'

export const useRoutes = () => {
    return <>
        <NavbarMenu/>
        <CartButton/>
        <PageContainer>
            <Switch>
                <Route path="/" exact>
                    <MainPage/>
                </Route>
                <Route path="/contacts" exact>
                    <ContactsPage/>
                </Route>
                {Object.values(categoriesData.categories).map(categoryData =>
                    <Route key={categoryData.route} path={categoryData.route} exact>
                        <ProductCategoryPage category={categoryData}/>
                    </Route>
                )}
                {Object.values(categoriesData.uncategorizedSubcategories).map(subcategoryData =>
                    <Route key={subcategoryData.route} path={subcategoryData.route} exact>
                        <ProductSubcategoryPage subcategory={subcategoryData}/>
                    </Route>
                )}
                {Object.values(categoriesData.categories).map(categoryData =>
                    categoryData.subcategories.map(subcategoryData =>
                        <Route key={subcategoryData.route} path={subcategoryData.route} exact>
                            <ProductSubcategoryPage subcategory={subcategoryData}/>
                        </Route>
                    )
                )}
                <Route path="/:productId(\d+)" exact>
                    <DetailPage/>
                </Route>
                <Route path="/cart" exact>
                    <ShoppingCart/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </PageContainer>
        <FooterComponent/>
    </>
}