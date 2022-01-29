(function() {
    'use strict';

    GM_addStyle(`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&display=swap');

    #api-search, #api-debug, .field__toggle--input {
        display: none;
    }

    .api {
        position: fixed;
        top: 50px;
        right: 40px;
        z-index: 3;

        width: 230px;
        height: auto;

        margin: 0;
        padding: 20px;

        border-radius: 5px;
        /* background-color: #FFFBFB; */
        background-color: #fdfcf9;

        font-family: 'Space Grotesk', sans-serif;
        font-size: 12px;
    }

    .form__field {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .field__radio--label {
        padding: 5px 0;
        margin-left: 10px;
        flex-grow: 1;

        border-radius: 20px;
        color: white;
        background-color: #E5E5E5;
        text-align: center;
        font-weight: 600;
        transition: background 0.2s ease;
    }

    .field__radio--label:hover {
        background-color: #d5d5d5;
        text-align: center;
        cursor: pointer;
        transition: background 0.2s ease;

    }

    .field__radio--input:checked + .field__radio--label:hover {
        cursor: inherit;
    }

    .field__radio--input:checked + .field__radio--label {
        /* background-color: #ADE5AC; */
        background-color: #9ce6d4;
        /* box-shadow: 0px 0px 6px #ADE6AC; */
        box-shadow: 0px 0px 6px #9ce6d4;

        transition: all 0.2s ease;
    }

    .field__text--input {
        padding: 5px 10px;
        margin-left: 10px;
        flex-grow: 1;

        border-radius: 20px;
        border: 1px solid #E5E5E5;

        font-size: 10px;
    }

    .field__text--input:focus {
        /* outline: 1px solid #ADE5AC; */
        outline: 1px solid #9ce6d4;
        /* box-shadow: 0px 0px 6px #ADE6AC; */
        box-shadow: 0px 0px 6px #9ce6d4;
    }

    .field__text--input::placeholder {
        color: #d5d5d5;
    }

    .field__text--input:focus::placeholder {
        color: #3131318b;
    }


    .toggle-wrapper {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        flex-grow: 1;
    }

    .field__toggle--label {
        position: relative;

        width: 50px;
        height: 20px;
        margin: 0;

        vertical-align: middle;

        background: #E5E5E5;
        border-radius: 20px;
        outline: none;
        cursor: pointer;

        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        transition: all 0.2s cubic-bezier(0.2, 0.85, 0.32, 1.2);
    }

    .field__toggle--label::after {
        content: "";

        position: absolute;
        left: 2px;
        top: 2px;

        width: 16px;
        height: 16px;
        background-color: rgb(255, 255, 255);
        border-radius: 50%;

        transform: translateX(0);

        transition: all 0.2s cubic-bezier(0.2, 0.85, 0.32, 1.2);
    }

    .field__toggle--input:checked + .field__toggle--label {
        background-color: #9ce6d4;
    }

    .field__toggle--input:checked + .field__toggle--label::after {
        transform: translateX(calc(100% + 14px));
    }

    .field__toggle--label::before {
        content: "FALSE";

        position: relative;
        left: 21px;
        top: 1px;

        font-size: 8px;
        color: white;
        font-weight: 600;

        transition: all 1s ease;
    }

    .field__toggle--input:checked ~ .field__toggle--label::before {
        content: "TRUE";

        position: relative;
        left: 8px;
        top: 1px;

        font-size: 8px;
        color: white;
        font-weight: 600;

        transition: all 1s ease;
    }

    .field-tooltip {
        width: 10px;
        height: 10px;

        margin-left: 3px;

        font-size: 8px;
        text-align: center;

        color: #E5E5E5;
        border: 1px solid #E5E5E5;
        border-radius: 50%;

        cursor: pointer;
    }

    [data-tooltip] {
        position: relative;
    }

    [data-tooltip]::after {
        content: attr(data-tooltip);
        position: absolute;
        left: 50%; top: 0%;
        transform: translateX(-50%);
        padding: 8px;
        z-index: 1;
        opacity: 0;

        width: 160px;
        height: auto;

        background: #000000;
        color: #fff;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        pointer-events: none;
        border-radius: 5px;

        transition: all 0.2s ease;

        font-size: 10px;
    }

    [data-tooltip]::before {
        content: "";
        position: absolute;
        left: 0px;
        bottom: 8px;
        z-index: 1;
        opacity: 0;

        border: 5px solid transparent;
        border-bottom: 5px solid #000000;

        transition: all 0.2s ease;
    }

    [data-tooltip]:hover::after {
        opacity: .8;
        top: 20px;
    }

    [data-tooltip]:hover::before {
        opacity: .8;
        bottom: -10px;
    }

    .field-indicator {
        position: relative;
        width: 10px;
        height: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        /* box-shadow: 10px 10px 10px #E5E5E5; */
        /* background: #E5E5E5; */
        /* border-radius: 50%; */
    }

    .field-indicator::after {
        content: "";
        display: block;
        position: relative;
        width: 3px;
        height: 3px;

        box-shadow: 0px 0px 6px #E5E5E5;
        background: #E5E5E5;
        border-radius: 50%;
    }

    .field__toggle--input:checked ~ .field-indicator::after {
        /* box-shadow: 0px 0px 6px #05d001; */
        box-shadow: 0px 0px 6px #00ff90;
        background: #9ce6d4;
        transition: all 0.4s ease;
    }

    .form__field--toggle {
        display: flex;
        justify-content: space-between;
    }

    .list__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    .list__title {
        color: #B0ADAD;
        font-size: 10px;
        flex-grow: 1;
    }

    .list__arrow {
        width: 12px;
        height: auto;
        display: inline-block;
        position: relative;
        margin-right: 2px;
    }

    .list__arrow::before, .list__arrow::after {
        content: "";
        position: absolute;
        width: 7.5px;
        height: 1px;

        background-color: #B0ADAD;
        display: inline-block;
        transition: all .2s ease;
    }

    .list__arrow::before {
        left: 0;
        transform: rotate(45deg);
    }

    .list__arrow::after {
        right: 0;
        transform: rotate(-45deg);
    }

    .list__header--open .list__arrow::before {
        left: 0;
        transform: rotate(-45deg);
    }

    .list__header--open .list__arrow::after {
        right: 0;
        transform: rotate(45deg);
    }

    .list__block-wrapper {
        display: flex;
    }

    .list__block {
        padding-top: 10px;
        height: 20px;
        display: none;
    }



    .list__header--open + .list__block {
        height: auto;
        display: block;
    }


    .apply-filters {
        width: 40px;
        height: 30px;
        padding: 0;

        text-align: center;
        font-size: 10px;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: bold;
        line-height: 32px;

        color: #fff;
        /* background-image: linear-gradient(to top, #fc8507, #ffa218); */
        /* background: #fc8507; */
        background: #FF6767;
        border-radius: 5px;
        cursor: pointer;

        position: fixed;
        z-index: 1010;
        transition: background 0.2s ease;
    }

    .apply-filters:hover {
        /* background-image: linear-gradient(to bottom, #ffbc0b, #ff7400); */
        /* box-shadow: inset 0 -2px 0 0 rgb(0 0 0 / 20%); */
        /* background: #fc8507; */
        background: #ff3b67;
        transition: background 0.2s ease;
    }

    .apply-filters:hover:before {
        /* background-image: linear-gradient(to bottom, #ffbc0b, #ff7400); */
        /* box-shadow: inset -2px 0 0 0 rgb(0 0 0 / 20%); */
        /* background: #fc8507; */
        background: #ff3b67;
        transition: background 0.2s ease;
    }


    .apply-filters:after {
        border-radius: 5px;
        box-shadow: inherit;
        display: block;
        content: '🔍';
        /* content: 'Открыть'; */
        position: absolute;
        left: 0;
        top: 0;
        background-image: inherit;
        border-radius: inherit;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .apply-filters:before {
        display: block;
        content: '';
        position: absolute;
        left: -5px;
        top: 8px;
        /* background-image: linear-gradient(45deg, #fc8507, #ffa218); */
        /* background: #fc8507; */
        background: #FF6767;
        transition: background 0.2s ease;
        width: 15px;
        height: 15px;
        border-radius: 3px;
        transform: rotate(135deg);
        z-index: 0;
    }

    hr {
        opacity: 0.1;
    }

    .form__list:last-child .form__field:last-child {
        margin-bottom: 0px;
    }`);

    const BASE_LINK = 'https://sort.diginetica.net/';

    const isSearch = location.pathname.match(/\/search/) !== null;
    const isDebug = location.pathname.match(/\/debug/) !== null;

    const getParameterByName = (name) => {
        const parametrValue = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(location.search);

        if (parametrValue && parametrValue.length) {
            return decodeURIComponent(parametrValue[1].replace(/\+/g, ''));
        }

        return '';
    };

    const parameter = {
        apiKey: {
            value: getParameterByName('apiKey'),
            description: '',
            key: 'apiKey',
        },

        st: {
            value: getParameterByName('st'),
            description: '',
            key: 'st',
        },

        strategy: {
            value: getParameterByName('strategy'),
            description: '',
            key: 'strategy',
        },

        fullData: {
            value: getParameterByName('fullData'),
            description: '',
            key: 'fullData',
        },

        withCorrection: {
            value: getParameterByName('withCorrection'),
            description: '',
            key: 'withCorrection',
        },

        withFacets: {
            value: getParameterByName('withFacets'),
            description: '',
            key: 'withFacets',
        },

        treeFacets: {
            value: getParameterByName('treeFacets'),
            description: '',
            key: 'treeFacets',
        },

        regionId: {
            value: getParameterByName('regionId'),
            description: '',
            key: 'regionId',
        },

        useCategoryPrediction: {
            value: getParameterByName('useCategoryPrediction'),
            description: 'Flag indicates whether use filtering by category prediction or not. Default value false',
            key: 'useCategoryPrediction',
        },

        size: {
            value: getParameterByName('size'),
            description: '',
            key: 'size',
        },

        offset: {
            value: getParameterByName('offset'),
            description: '',
            key: 'offset',
        },

        showUnavailable: {
            value: getParameterByName('showUnavailable'),
            description: '',
            key: 'showUnavailable',
        },

        unavailableMultiplier: {
            value: getParameterByName('unavailableMultiplier'),
            description: '',
            key: 'unavailableMultiplier',
        },

        withSku: {
            value: getParameterByName('withSku'),
            description: '',
            key: 'withSku',
        },

        useCompletion: {
            value: getParameterByName('useCompletion'),
            description: '',
            key: 'useCompletion',
        },

        preview: {
            value: getParameterByName('preview'),
            description: '',
            key: 'preview',
        },

        sort: {
            value: getParameterByName('sort'),
            description: '',
            key: 'sort',
        },

        filter: {
            value: getParameterByName('filter'),
            description: '',
            key: 'filter',
        },
    };

    const getParameterFormatKey = (key) => {
        return key[0].toUpperCase() + key.slice(1);
    };

    const getFormTemplate = () => {
        return (
            `<div class="api">
                <form class="api__form" id="api__form">

                    <div class="form__field">
                        <span class="field__title">API:</span>
                        <input id="api-search" class="field__radio--input" type="radio" name="api-type" ${isSearch ? 'checked' : ''} value="search"/>
                        <label for="api-search" class="field__radio--label">SEARСH</label>

                        <input id="api-debug" class="field__radio--input" type="radio" name="api-type" ${isDebug ? 'checked' : ''} value="debug" />
                        <label for="api-debug" class="field__radio--label">DEBUG</label>
                    </div>

                    <!-- ST:TEXT -->
                    <div class="form__field">
                        <span class="field__title">${getParameterFormatKey(parameter.st.key)}:</span>
                        <input id="${parameter.st.key}" name="${parameter.st.key}" class="field__text--input" type="text" placeholder="Поисковый запрос" value="${parameter.st.value}" autocomplete="off" />
                    </div>

                    <!-- APIKEY:TEXT -->
                    <div class="form__field">
                        <span class="field__title">${getParameterFormatKey(parameter.apiKey.key)}:</span>
                        <input id="${parameter.apiKey.key}" name="${parameter.apiKey.key}" class="field__text--input" type="text" placeholder="Ключ клиента" value="${parameter.apiKey.value}" autocomplete="off" />
                    </div>

                    <hr />

                    <!-- USE_CATEGORY_PREDICTION:CHECKBOX -->
                    <div class="form__field form__field--toggle">
                        <span class="field__title">${getParameterFormatKey(parameter.useCategoryPrediction.key)}:</span>
                        <span data-tooltip="${parameter.useCategoryPrediction.description}" class="field-tooltip">?</span>

                        <div class="toggle-wrapper">
                            <input type="checkbox" name="${parameter.useCategoryPrediction.key}" id="${parameter.useCategoryPrediction.key}" class="field__toggle--input" value="${parameter.useCategoryPrediction.value}" ${parameter.useCategoryPrediction.value === 'true' ? 'checked' : ''} />
                            <label for="${parameter.useCategoryPrediction.key}" class="field__toggle--label"></label>
                            <span class="field-indicator"></span>
                        </div>
                    </div>

                    <!-- WITH_CORRECTION:CHECKBOX -->
                    <div class="form__field form__field--toggle">
                        <span class="field__title">${getParameterFormatKey(parameter.withCorrection.key)}:</span>
                        <span data-tooltip="${parameter.withCorrection.description}" class="field-tooltip">?</span>

                        <div class="toggle-wrapper">
                            <input type="checkbox" name="${parameter.withCorrection.key}" id="${parameter.withCorrection.key}" class="field__toggle--input" value="${parameter.withCorrection.value}" ${parameter.withCorrection.value === 'true' ? 'checked' : ''} />
                            <label for="${parameter.withCorrection.key}" class="field__toggle--label"></label>
                            <span class="field-indicator"></span>
                        </div>
                    </div>

                    <!-- FULL_DATA:CHECKBOX -->
                    <div class="form__field form__field--toggle">
                        <span class="field__title">${getParameterFormatKey(parameter.fullData.key)}:</span>
                        <span data-tooltip="${parameter.fullData.description}" class="field-tooltip">?</span>

                        <div class="toggle-wrapper">
                            <input type="checkbox" name="${parameter.fullData.key}" id="${parameter.fullData.key}" class="field__toggle--input" value="${parameter.fullData.value}" ${parameter.fullData.value === 'true' ? 'checked' : ''} />
                            <label for="${parameter.fullData.key}" class="field__toggle--label"></label>
                            <span class="field-indicator"></span>
                        </div>
                    </div>

                    <!-- WITH_SKU:CHECKBOX -->
                    <div class="form__field form__field--toggle">
                        <span class="field__title">${getParameterFormatKey(parameter.withSku.key)}:</span>
                        <span data-tooltip="${parameter.withSku.description}" class="field-tooltip">?</span>

                        <div class="toggle-wrapper">
                            <input type="checkbox" name="${parameter.withSku.key}" id="${parameter.withSku.key}" class="field__toggle--input" value="${parameter.withSku.value}" ${parameter.withSku.value === 'true' ? 'checked' : ''} />
                            <label for="${parameter.withSku.key}" class="field__toggle--label"></label>
                            <span class="field-indicator"></span>
                        </div>
                    </div>

                    <hr />

                    <div class="form__list">
                        <div class="list__header">
                            <span class="list__title">Количество товаров</span>
                            <div class="list__arrow list__arrow--open"></div>
                        </div>
                        <div class="list__block">
                           <div class="list__block-wrapper">
                              <!-- SIZE:NUMBER -->
                              <div class="form__field">
                                 <span class="field__title">${getParameterFormatKey(parameter.size.key)}:</span>
                                 <input id="${parameter.size.key}" name="${parameter.size.key}" class="field__text--input" type="number" autocomplete="off" placeholder="${parameter.size.value !== 'false' ? parameter.size.value : 'Количество'}" value="${parameter.size.value}" step="${parameter.size.value !== 'false' ? parameter.size.value : 20}" min="0" style="width:50%; margin-right: 5px; margin-left: 5px;" />
                              </div>
                              <!-- OFFSET:NUMBER -->
                              <div class="form__field">
                                 <span class="field__title">${getParameterFormatKey(parameter.offset.key)}:</span>
                                 <input id="${parameter.offset.key}" name="${parameter.offset.key}" class="field__text--input" type="number" autocomplete="off" placeholder="${parameter.offset.value !== 'false' ? parameter.offset.value : 'От'}" value="${parameter.offset.value}" step="${parameter.offset.value !== 'false' ? parameter.offset.value : 20}" min="0" style="width:50%; margin-left: 5px;" />
                              </div>
                           </div>
                        </div>
                    </div>

                    <hr />

                    <div class="form__list">
                        <div class="list__header">
                            <span class="list__title">Наличие товаров</span>
                            <div class="list__arrow list__arrow--open"></div>
                        </div>
                        <div class="list__block">
                              <!-- SHOW_UNAVAILABLE:CHECKBOX -->
                              <div class="form__field form__field--toggle">
                                 <span class="field__title">${getParameterFormatKey(parameter.showUnavailable.key)}:</span>
                                 <span data-tooltip="${parameter.showUnavailable.description}" class="field-tooltip">?</span>

                                 <div class="toggle-wrapper">
                                    <input type="checkbox" name="${parameter.showUnavailable.key}" id="${parameter.showUnavailable.key}" class="field__toggle--input" value="${parameter.showUnavailable.value}" ${parameter.showUnavailable.value === 'true' ? 'checked' : ''} />
                                    <label for="${parameter.showUnavailable.key}" class="field__toggle--label"></label>
                                    <span class="field-indicator"></span>
                                 </div>
                              </div>
                              <!-- UNAVAILABLE_MULTIPLIER:NUMBER -->
                              <div class="form__field">
                                 <span class="field__title">${getParameterFormatKey(parameter.unavailableMultiplier.key)}:</span>
                                 <input id="${parameter.unavailableMultiplier.key}" name="${parameter.unavailableMultiplier.key}" class="field__text--input" type="number" autocomplete="off" placeholder="${parameter.unavailableMultiplier.value}" value="${parameter.unavailableMultiplier.value}" step="${parameter.unavailableMultiplier.value}" min="0" style="width:100%;"/>
                              </div>
                        </div>
                    </div>

                    <hr />

                    <div class="form__list">
                        <div class="list__header">
                            <span class="list__title">Другое</span>
                            <div class="list__arrow list__arrow--open"></div>
                        </div>
                        <div class="list__block">
                              <!-- STRATEGY:TEXT -->
                              <div class="form__field">
                                    <span class="field__title">${getParameterFormatKey(parameter.strategy.key)}:</span>
                                    <input id="${parameter.strategy.key}" name="${parameter.strategy.key}" class="field__text--input" type="text" placeholder="Стратегия" value="${parameter.strategy.value}" />
                              </div>

                              <!-- REGION_ID:TEXT -->
                              <div class="form__field">
                                    <span class="field__title">${getParameterFormatKey(parameter.regionId.key)}:</span>
                                    <input id="${parameter.regionId.key}" name="${parameter.regionId.key}" class="field__text--input" type="text" placeholder="Стратегия" value="${parameter.regionId.value}" />
                              </div>
                        </div>
                    </div>


                </form>
            </div>`
        );
    };

    const getApplyFiltersTemplate = (x, y, height) => {
        const HEIGHT_APPLY_ELEMENT = 30;
        const LEFT_PADDING = 20;
        y = y - ((HEIGHT_APPLY_ELEMENT - height) / 2);
        return (
            `<div class="apply-filters" style="top: ${y}px; left: ${x + LEFT_PADDING}px;"></div>`
            );
    }

    const render = (container, template, place = `afterbegin`) => {
        container.insertAdjacentHTML(place, template);
    };

    const rootElement = document.querySelector('body');
    render(rootElement, getFormTemplate());

    const onApplyFilterClick = () => {
        const DEBUG_VALUE = 'debug';
        const DEBUG_KEY = 'RhtUi23a89Ius';

        const apiTypeElement = document.querySelector('#api__form [name="api-type"]:checked');
        let apiType = '';
        if (apiTypeElement) {
            apiType = apiTypeElement.value;
        };

        const parameterKeys = Object.keys(parameter);
        const searchLink = parameterKeys.reduce((searchLink, key, index) => {
            const input = document.querySelector(`input[name=${key}]`);
            let inputValue = '';
            if (input && (input.type === 'text' || input.type === 'number')) {
                inputValue = index ? `&${key}=${input.value}` : `?${key}=${input.value}`;
            } else if (input) {
                if (apiType === DEBUG_VALUE && (key === 'fullData' || key === 'withSku')) {
                    inputValue = index ? `&${key}=true` : `?${key}=true`;
                } else {
                    inputValue = index ? `&${key}=${input.checked}` : `?${key}=${input.checked}`;
                }
            } else {
                inputValue = index ? `&${key}=${parameter[key].value}` : `?${key}=${parameter[key].value}`;
            }

            return searchLink ? `${searchLink}${inputValue}` : inputValue;
        }, '');

        location.href = apiType === DEBUG_VALUE ? `${BASE_LINK}${apiType}/${searchLink}&key=${DEBUG_KEY}` : `${BASE_LINK}${apiType}/${searchLink}`;
    };

    let timer = 0;
    let applyFilterElement = document.querySelector('.apply-filters');
    const APPLY_TIMEOUT = 5000;
    const ENTER_CODE = 13;
    const form = document.querySelector('#api__form');
    form.addEventListener('input', (evt) => {
        if (applyFilterElement) {
            applyFilterElement.remove();
            applyFilterElement.removeEventListener('click', onApplyFilterClick);
        }

        const rectEvtElement = evt.target.nextElementSibling ? evt.target.nextElementSibling.getBoundingClientRect() : evt.target.getBoundingClientRect();
        const rectForm = form.getBoundingClientRect();

        render(rootElement,
                getApplyFiltersTemplate(rectForm.right, rectEvtElement.y, rectEvtElement.height));

        applyFilterElement = document.querySelector('.apply-filters');
        applyFilterElement.addEventListener('click', onApplyFilterClick);


        clearTimeout(timer);
        timer = setTimeout(() => {
            applyFilterElement.removeEventListener('click', onApplyFilterClick);
            applyFilterElement.remove();
        }, APPLY_TIMEOUT);
    });

    form.addEventListener('keyup', ({keyCode}) => {
        if (keyCode === ENTER_CODE) {
            onApplyFilterClick();
        }
    });

    const spoilerElements = document.querySelectorAll('.form__list .list__header');
    const activeSpoilers = sessionStorage.activeSpoilers ? JSON.parse(sessionStorage.activeSpoilers) : [];
    const STRATEGY_SPOILER_INDEX = 2;
    spoilerElements.forEach((spoiler, index) => {
        if (activeSpoilers.length && activeSpoilers[index] === index || index === STRATEGY_SPOILER_INDEX) {
            spoiler.classList.add('list__header--open');
        }

        spoiler.addEventListener('click', ({currentTarget}) => {
            if (currentTarget.classList.contains('list__header--open')) {
                currentTarget.classList.remove('list__header--open');
                activeSpoilers[index] = undefined;
            } else {
                currentTarget.classList.add('list__header--open');
                activeSpoilers[index] = index;
            }

            sessionStorage.activeSpoilers = JSON.stringify(activeSpoilers);
        });
    });

})();