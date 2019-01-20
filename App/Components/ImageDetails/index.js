import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, Dimensions, WebView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import styles from './styles';
import ChartView from 'react-native-highcharts';
import { connect } from 'react-redux';
import HTML from 'react-native-render-html';


class ImageDetails extends Component {
    parallaxImage(){
        return (
            <Image
                source={{ uri: 'https://assets.smallcase.com/images/smallcases/130/' + this.props.historicalData.scid + '.png' }}
                style={styles.cardImageStyle} />        
        )
    }
    
    getPoints(){
        let points = this.props.historicalData.points.map((item) => {
            return item.index
        });
        return points;
    }

    render() {
        var Highcharts = 'Highcharts';

        var config = {
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10
            },
            title: {
                text: 'SmallCase Performance'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b> Data</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            plotOptions: {
                series: {
                    pointStart: Date.UTC(2015, 0, 28),
                    pointInterval: 24 * 3600 * 1000 * 30 // one day
                }
            },

            series: [{data: this.getPoints()}]
        };

        const options = {
            global: {
                useUTC: false
            },
            lang: {
                decimalPoint: ',',
                thousandsSep: '.'
            }
        };

        return (
            <SafeAreaView forceInset={{ bottom: 'always' }} style={styles.flexView}>
                <ParallaxScrollView
                    backgroundColor="#fff"
                    contentBackgroundColor="#fff"
                    contentContainerStyle={{  flexGrow: 1 }}
                    parallaxHeaderHeight={220}
                    bounces={true}
                    renderBackground={() => this.parallaxImage()}
                >
                    <View style={styles.scrollBody}>
                        <View style={styles.rationale}>
                            <Text style={styles.textCaption}>{`OverView`}</Text>
                            <HTML html={this.props.smallCaseData.find((item) => item.data.data.scid == this.props.historicalData.scid).data.data.rationale} imagesMaxWidth={Dimensions.get('window').width} />
                        </View>
                        <View style={{ flex: 1, borderColor: '#a9a9a9', borderWidth: 0.5, borderRadius: 3}}>
                            <ChartView
                                style={{ height: 300 }}
                                config={config}
                                options={options}
                                stock={true}
                                originWhitelist={['']}
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                            />
                        </View>
                
                    </View>
                </ParallaxScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        historicalData: state.historical.data,
        smallCaseData: state.gallery.data
    }
}

export default connect(mapStateToProps)(ImageDetails);


