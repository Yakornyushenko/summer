import React, {useContext, useState} from 'react';
import {
    Box,
    Button,
    createStyles,
    Flex,
    Input,
    Select,
    Text,
    Image,
} from "@mantine/core";

import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {transformTitle} from "../../utils/transformTitle";

import cross from "../../static/cross.png";
import vectorUp from "../../static/vectorUp.png";
import downVector from "../../static/vectorDown.png";
import selectVector from "../../static/selectVector.png";
import {value} from "lodash/seq";

const useStyles = createStyles({
    wrapper: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        border: 1,
        borderColor: "#EAEBED",
        padding: 20,
    },
    filterHeaderText: {
        fontWeight: "700",
        fontSize: 21,
        color: "#232134",
        lineHeight: "20px",
    },
    resetHeaderText: {
        color: "#ACADB9",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: "20px",
    },
    buttonVector: {
        position: "absolute",
        border: "none",
        cursor: "pointer",
        backgroundColor: "transparent",
        marginRight: "11px",
        zIndex: 5,
        right: 0,
    },
    formTitle: {
        marginBottom: "10px",
        fontWeight: "700",
        fontSize: 16,
        color: "#232134",
        lineHeight: "20px",
    },
    formInput: {
        borderRadius: "8px",
    },
    submitBtn: {
        width: "100%",
        marginTop: "22px",
        height: "40px",
        borderRadius: "6px",
    }
})
export const FilterForm = observer(({categories}) => {
    const {classes} = useStyles()
    const {vacancy} = useContext(Context)

    let [valueFrom, setValueFrom] = useState(''),
        [valueTo, setValueTo] = useState(''),
        [valueCatalogues, setValueCatalogues] = useState('');


    const selectData = categories.map((item) => ({
        value: item.key,
        label: transformTitle(item.title, 27)
    }))

    const applyData = () => {
        vacancy.setCatalogues(valueCatalogues);
        vacancy.setPaymentFrom(valueFrom);
        vacancy.setPaymentTo(valueTo);
    }
    const clearData = () => {
        setValueFrom(0);
        setValueTo(0);
        setValueCatalogues('');
        vacancy.setCatalogues('');
        vacancy.setPaymentFrom(null);
        vacancy.setPaymentTo(null);
    }

    return (
        <Box className={classes.wrapper} w={315} h={361}>
            <Flex w={285} gap="xl" justify="space-between" align="center">
                <Text className={classes.filterHeaderText}>
                    Фильтры
                </Text>
                <Flex align="center">
                    <Text className={classes.resetHeaderText}>
                        Сбросить все
                    </Text>
                    <Button onClick={() => clearData()} compact color="gray" variant="subtle">
                        <Image alt="Сброс фильтров" src={cross} width={16} height={16}/>
                    </Button>
                </Flex>
            </Flex>
            <Box style={{marginTop: 27}} maw={315} mx="auto">
                <Box>
                    <Text className={classes.formTitle}>Отрасль</Text>

                    <Select
                        size="md"
                        data-elem="industry-select"
                        style={{marginBottom: 17}}
                        placeholder="Выберите отрасль"
                        rightSection=
                            {
                                <Image
                                    alt="Выберите отрасль"
                                    src={selectVector}
                                    width={15} height={7}
                                    style={{marginRight: 15}}
                                />
                            }
                        rightSectionWidth={30}
                        data={selectData}
                        value={valueCatalogues}
                        onChange={(e) => setValueCatalogues(e)}
                    />
                    <Text className={classes.formTitle}>Оклад</Text>

                    <Box style={{position: "relative", marginBottom: 4}}>
                        <Input
                            data-elem="salary-from-input"
                            size="md"
                            className={classes.formInput}
                            value={valueFrom}
                            placeholder="От"
                            onChange={(e) => setValueFrom(e.target.value)}
                            rightSection={
                                <>
                                    <button
                                        style={{top: 9, right: -4}}
                                        type="text" className={classes.buttonVector}
                                        color="gray"
                                        onClick={() => setValueFrom(Number(valueFrom) + 2000)}
                                    >
                                        <Image alt="Оклад от" src={vectorUp} width={8} height={4}/>
                                    </button>

                                    <button
                                        type="text"
                                        style={{bottom: 13, right: -4}}
                                        className={classes.buttonVector}
                                        onClick={() => valueFrom > 0 ? setValueFrom(valueFrom - 2000) : null}
                                        color="gray"
                                    >
                                        <Image alt="Оклад от" src={downVector} width={8} height={4}/>
                                    </button>
                                </>
                            }
                        />
                    </Box>

                    <Box style={{position: "relative"}}>
                        <Input
                            data-elem="salary-to-input"
                            type="text"
                            size="md"
                            className={classes.formInput}
                            placeholder="До"
                            value={valueTo}
                            onChange={(e) => setValueTo(e.target.value)}
                            rightSection={
                                <>
                                    <button
                                        style={{top: 12, right: -4}}
                                        type="text"
                                        className={classes.buttonVector}
                                        color="gray"
                                        onClick={() => setValueTo(Number(valueTo) + 2000)}
                                    >
                                        <Image alt="Оклад до" src={vectorUp} width={8} height={4}/>
                                    </button>
                                    <button
                                        type="text"
                                        style={{bottom: 10, right: -4}}
                                        className={classes.buttonVector}
                                        color="gray"
                                        onClick={() => valueTo > 0 ? setValueTo(valueTo - 2000) : null}
                                    >
                                        <Image alt="Оклад до" src={downVector} width={8} height={4}/>
                                    </button>
                                </>
                            }
                        />
                    </Box>

                    <Button
                        data-elem="search-button"
                        onClick={() => applyData()}
                        className={classes.submitBtn}
                        type="submit"
                    >
                        Применить
                    </Button>
                </Box>
            </Box>
        </Box>
    );
});