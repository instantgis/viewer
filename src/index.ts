import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import LayerList from "@arcgis/core/widgets/LayerList";

const map = new WebMap({
  portalItem: {
    id: 'd5dda743788a4b0688fe48f43ae7beb9'
  }
});

const view = new MapView({
  container: 'viewDiv',
  map
});

const layerList = new LayerList({
  view,
  listItemCreatedFunction: (event: { item: __esri.ListItem}) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true
      } as __esri.ListItemPanel;
    }
  }
});

view.ui.add( layerList, 'top-right');

