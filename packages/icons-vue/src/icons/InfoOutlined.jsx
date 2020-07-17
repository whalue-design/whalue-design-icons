// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import InfoOutlinedSvg from '@whalue-design/icons-svg/lib/asn/InfoOutlined';

export default {
  name: 'IconInfoOutlined',
  displayName: 'InfoOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: InfoOutlinedSvg } },
      children,
    ),
};