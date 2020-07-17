// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import EnterOutlinedSvg from '@whalue-design/icons-svg/lib/asn/EnterOutlined';

export default {
  name: 'IconEnterOutlined',
  displayName: 'EnterOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EnterOutlinedSvg } },
      children,
    ),
};