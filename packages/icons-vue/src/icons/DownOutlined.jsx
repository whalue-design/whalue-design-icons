// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DownOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DownOutlined';

export default {
  name: 'IconDownOutlined',
  displayName: 'DownOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DownOutlinedSvg } },
      children,
    ),
};