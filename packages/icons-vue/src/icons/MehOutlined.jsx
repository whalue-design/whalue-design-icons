// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MehOutlinedSvg from '@whalue-design/icons-svg/lib/asn/MehOutlined';

export default {
  name: 'IconMehOutlined',
  displayName: 'MehOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MehOutlinedSvg } },
      children,
    ),
};