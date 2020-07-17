// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DoubleLeftOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DoubleLeftOutlined';

export default {
  name: 'IconDoubleLeftOutlined',
  displayName: 'DoubleLeftOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DoubleLeftOutlinedSvg } },
      children,
    ),
};