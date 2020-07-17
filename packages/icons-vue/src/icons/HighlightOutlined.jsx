// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import HighlightOutlinedSvg from '@whalue-design/icons-svg/lib/asn/HighlightOutlined';

export default {
  name: 'IconHighlightOutlined',
  displayName: 'HighlightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HighlightOutlinedSvg } },
      children,
    ),
};