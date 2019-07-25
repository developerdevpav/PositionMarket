import {createSelector} from '@ngrx/store';
import * as attraction from '../reducers/attraction.reducer';
import {AttractionModel} from '../models/attraction-model';
import {selectCurrentLanguage} from './language.selectors';
import * as converter from './converter';
import {Language} from '../models/language.model';
import * as  typeService from '../reducers/type-service.reducer';
import * as  selectedProduct from '../reducers/selected-product.reducer';
import {ProductSelect} from '../reducers/selected-product.reducer';
import {Dictionary} from '@ngrx/entity';
import {TypeService} from '../models/type-service.model';
import {TypeServiceEnum} from '../models/type-service';
import {ImageUI} from '../../ui/models';
import {PositionCatalog} from '../../components/users/catalog/list-catalog-position/list-catalog-position.component';
import {ProductRow} from '../../components/users/table-service-position/table-service-position.component';

export const getPositionCatalog = createSelector(
  selectCurrentLanguage,
  selectedProduct.selectEntities,
  attraction.selectAll,
  typeService.selectEntities,
  (language: Language,
   selectedProducts: Dictionary<ProductSelect>,
   positions: AttractionModel[],
   typeService: Dictionary<TypeService>) => {
    if (!positions) {
      return [];
    }

    return positions.map(position => {
        let minPriceProduct = undefined;

        const products = position.products;

        if (products && products.length > 0) {
          const firstElement = products
            .filter(product => product != null)
            .filter(product => product.service != null)
            .filter(product => {
              const service = typeService[product.service];
              return service != null && service.type === TypeServiceEnum.RENT;
            })
            .sort((productMaster, productNext) => {
              return productMaster.price > productNext.price ? 1 : -1;
            })[0];

          if (firstElement) {
            minPriceProduct = firstElement.price;
          }
        }

        const images = position.images
          .sort(image => image.mainImage ? 1 : -1)
          .map((image, index) => new ImageUI(image.id, index, image.url));

        let selectedProductRows: ProductRow[] = [];
        let productRows: ProductRow[] = [];

        console.log(position.products);
        if (position.products && position.products.length > 0) {
          productRows = position.products
            .filter(product => typeService[product.service])
            .map(product => {
              const service = typeService[product.service];
              return {
                id: product.id,
                type: service.type,
                price: product.price,
                title: converter.getStringFromArrayValuesByLanguage(service.values, language)
              } as ProductRow;
            });

          selectedProductRows = productRows.filter(product => selectedProducts[product.id] != null);
        }

        return {
          id: position.id,
          title: converter.getStringFromArrayValuesByLanguage(position.title, language),
          description: converter.getStringFromArrayValuesByLanguage(position.description, language),
          minPrice: minPriceProduct,
          images: images,
          products: productRows,
          selectedProduct: selectedProductRows
        } as PositionCatalog;
      }
    );
  }
);

/**
 * */
export const getPositionProducts = createSelector(
  selectCurrentLanguage,
  attraction.selectEntities,
  typeService.selectEntities,
  (language: Language, positions: Dictionary<AttractionModel>, typeService: Dictionary<TypeService>, props) => {
    if (positions == null) {
      return [];
    }

    const position = positions[props.id];

    if (position == null) {
      return [];
    }

    if (position.products == null || position.products.length == 0) {
      return [];
    }

    return position.products.map(product => {
      const service = typeService[product.service];

      return {
        id: product.id,
        type: service.type,
        price: product.price,
        title: converter.getStringFromArrayValuesByLanguage(service.values, language)
      } as ProductRow;
    });

  }
);
