// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PoundOutlinedSvg from '@whalue-design/icons-svg/lib/asn/PoundOutlined';

export default {
  name: 'IconPoundOutlined',
  displayName: 'PoundOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PoundOutlinedSvg } },
      children,
    ),
};