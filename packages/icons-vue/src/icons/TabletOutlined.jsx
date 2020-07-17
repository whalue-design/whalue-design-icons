// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TabletOutlinedSvg from '@whalue-design/icons-svg/lib/asn/TabletOutlined';

export default {
  name: 'IconTabletOutlined',
  displayName: 'TabletOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TabletOutlinedSvg } },
      children,
    ),
};