// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DownSquareOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DownSquareOutlined';

export default {
  name: 'IconDownSquareOutlined',
  displayName: 'DownSquareOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DownSquareOutlinedSvg } },
      children,
    ),
};