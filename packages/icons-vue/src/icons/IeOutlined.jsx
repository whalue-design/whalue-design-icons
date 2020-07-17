// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import IeOutlinedSvg from '@whalue-design/icons-svg/lib/asn/IeOutlined';

export default {
  name: 'IconIeOutlined',
  displayName: 'IeOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: IeOutlinedSvg } },
      children,
    ),
};