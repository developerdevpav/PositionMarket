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
import {Row} from '../../components/users/table-service-position/table-service-position.component';
import {KitProduct, PositionCatalog} from '../../components/users/catalog/item-catalog-position/item-catalog-position.component';
import {Product} from '../models/products';

export const getPositionCatalog = createSelector(
  selectCurrentLanguage,
  attraction.selectAll,
  typeService.selectEntities,
  (language: Language,
   positions: AttractionModel[],
   typeServiceDictionary: Dictionary<TypeService>) => {
    if (!positions) {
      return [];
    }

    return positions.map(position => {
        const products = position.products;

        let minRentPrice;
        let avatars;

        if (position.images) {
          avatars = position.images
            .sort(image => image.mainImage ? 1 : -1)
            .map((image, index) => new ImageUI(image.id, ++index, image.url));
        }

        let setProductRent: KitProduct;
        let setProductDelivery: KitProduct;
        let setProductPersonal: KitProduct;

        if (position.products && position.products.length > 0) {
          setProductRent = convertProductsToSerProduct(products, language, id => typeServiceDictionary[id], TypeServiceEnum.RENT);
          setProductDelivery = convertProductsToSerProduct(products, language, id => typeServiceDictionary[id], TypeServiceEnum.DELIVERY);
          setProductPersonal = convertProductsToSerProduct(products, language, id => typeServiceDictionary[id], TypeServiceEnum.PERSONAL);
        }

        return {
          id: position.id,
          title: converter.getStringFromArrayValuesByLanguage(position.title, language),
          description: converter.getStringFromArrayValuesByLanguage(position.description, language),
          images: avatars,
          rent: setProductRent,
          delivery: setProductDelivery,
          personal: setProductPersonal
        } as PositionCatalog;
      }
    );
  }
);

const convertProductsToSerProduct = (array: Product[], language: Language, callBack: (id: string) => TypeService, type: TypeServiceEnum) => {
  return {
    minPrice: getMinPriceByTypeService(array,
      (id) => callBack(id), type),
    products: convertProductsToRowsByTypeService(array, language,
      (id) => callBack(id), type)
  };
};
const getMinPriceByTypeService = (array: Product[], callBack: (id: string) => TypeService, type: TypeServiceEnum) => {
  const firstElement = array
    .filter(product => product != null)
    .filter(product => product.service != null)
    .filter(product => {
      const service = callBack(product.service);
      return service != null && service.type === type;
    })
    .sort((productMaster, productNext) => {
      return productMaster.price > productNext.price ? 1 : -1;
    })[0];

  return firstElement ? firstElement.price : 0;
};
const convertProductsToRowsByTypeService = (array: Product[], language: Language, callBack: (id: string) => TypeService, type: TypeServiceEnum) => {
  if (!array) {
    return [];
  }

  return array
    .filter(product => {
      const service = callBack(product.service);
      return service && service.type === type;
    })
    .map(product => {
      const service = callBack(product.service);
      return {
        id: product.id,
        type: service.type,
        price: product.price,
        title: converter.getStringFromArrayValuesByLanguage(service.values, language)
      } as Row;
    });
};

/**
 * */
export const getPositionProducts = createSelector(
  selectCurrentLanguage,
  attraction.selectEntities,
  typeService.selectEntities,
  (language: Language, positions: Dictionary<AttractionModel>,
   typeServiceDictionary: Dictionary<TypeService>, props) => {
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
      const service = typeServiceDictionary[product.service];

      return {
        id: product.id,
        type: service.type,
        price: product.price,
        title: converter.getStringFromArrayValuesByLanguage(service.values, language)
      } as Row;
    });

  }
);

export const getSelectProduct = createSelector(
  selectCurrentLanguage,
  selectedProduct.selectEntities,
  (language: Language, productSelectDictionary: Dictionary<ProductSelect>, products: Row[]) => {
    if (!products) {
      return [];
    }
    return products.filter(product => productSelectDictionary[product.id]);
  }
);

export const getMapPositions = createSelector(
  selectCurrentLanguage,
  selectedProduct.selectAll,
  attraction.selectEntities,
  (language: Language, productSelects: ProductSelect[],
   attractionModelDictionary: Dictionary<AttractionModel>) => {
    const map: Map<string, string[]> = new Map();

    productSelects.forEach(it => {
      if (!map.has(it.positionId)) {
        map.set(it.positionId, []);
      }

      map.get(it.positionId).push(it.id);
    });

    return map;
  }
);

export const getDescriptionProductById = createSelector(
  selectCurrentLanguage,
  attraction.selectEntities,
  typeService.selectEntities,
  (language: Language, attractionModelDictionary: Dictionary<AttractionModel>,
   typeServiceDictionary: Dictionary<TypeService>,
   props: { positionId: string, productId: string }) => {
    const position = attractionModelDictionary[props.positionId];

    if (!position) {
      return '';
    }

    const product = position.products.find(product => product.id === props.productId);

    if (!product) {
      return '';
    }

    const service = typeServiceDictionary[product.service];

    console.log(service);

    return converter.getStringFromArrayValuesByLanguage(service.description, language);
  }
);
